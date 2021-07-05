'use strict';
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET || 'supersecret';

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
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
  return jwt.sign({ username: user.username }, SECRET);
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
