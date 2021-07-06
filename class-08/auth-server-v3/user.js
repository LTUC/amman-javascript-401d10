'use strict';
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET || 'supersecret';

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      default: 'user',
      enum: ['user', 'editor', 'admin'],
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

userSchema.virtual('capabilities').get(function () {
  const acl = {
    user: ['read'],
    editor: ['read', 'create', 'update'],
    admin: ['read', 'create', 'update', 'delete'],
  };
  return acl[this.role];
});
// mongoose middleware or hooks

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username });
  console.log('USER', user);
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid Login');
  }
  return user;
};

userSchema.statics.generateToken = function (user) {
  return jwt.sign({ username: user.username, capabilities: user.capabilities }, SECRET);
};

userSchema.statics.authenticateToken = async function (token) {
  try {
    const payload = jwt.verify(token, SECRET);
    console.log('PAYLOAD', payload);
    const user = await this.findOne({ username: payload.username });
    if (user) {
      return user;
    }
    throw new Error('USER NOT FOUND');
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = mongoose.model('user', userSchema);
