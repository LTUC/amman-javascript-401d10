'use strict';

const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');
const basicAuth = require('./basic-auth');
const bearerAuth = require('./bearer-auth');
const acl = require('./acl-middleware');
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
app.post('/create', bearerAuth, acl('create'), (req, res) => {
  res.send('I can POST');
});
app.put('/update', bearerAuth, acl('update'), (req, res) => {
  res.send('I can Update');
});
app.delete('/delete', bearerAuth, acl('delete'), (req, res) => {
  res.send('I can Delete');
});
mongoose
  .connect('mongodb://localhost:27017/auth')
  .then(() => app.listen(PORT, () => console.log(`Server is up ${PORT}`)))
  .catch((e) => console.error('Connection Error', e.message));
