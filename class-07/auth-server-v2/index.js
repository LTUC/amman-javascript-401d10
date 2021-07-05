'use strict';

const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');
const basicAuth = require('./basic-auth');
const bearerAuth = require('./bearer-auth');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    const doc = await user.save();
    const token = User.generateToken(doc);
    res.status(201).json({ token });
  } catch (error) {
    res.status(403).json({ message: 'Error Creating User' });
  }
});

app.post('/signin', basicAuth, (req, res) => {
  res.json({ token: req.token });
});

app.get('/user', bearerAuth, (req, res) => {
  res.json({ user: req.user });
});

mongoose
  .connect('mongodb://localhost:27017/auth')
  .then(() => app.listen(PORT, () => console.log(`Server is up ${PORT}`)))
  .catch((e) => console.error('Connection Error', e.message));
