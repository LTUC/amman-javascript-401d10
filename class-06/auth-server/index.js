'use strict';
// 3'rd party dependencies or libraries
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/auth';
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // handle form submissions

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('user', userSchema);

/*
POST /signup {username:"mahmoud",password:"1234"}
*/

app.post('/signup', async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const exist = await User.findOne({ username: req.body.username }); //null
    if (exist) throw new Error('User exist');
    const user = new User(req.body);
    const doc = await user.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
});

app.post('/signin', async (req, res, next) => {
  // req.headers.authorization => Basic pw=res4
  const headers = req.headers.authorization.split(' '); // ['Basic','pw=res4]
  if (!headers[0] === 'Basic') next('Wrong Authorization headers');
  const decodedPass = base64.decode(headers[1]); //'mahmoud:1234'
  const [username, password] = decodedPass.split(':');
  try {
    const user = await User.findOne({ username });
    if (!user || !password) next('Wrong User / password');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Wrong password');

    res.json(user);
  } catch (error) {
    console.log('WHAT', error);
    res.status(403).json({ message: error.message });
  }
});

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`up and running ${PORT}`));
  })
  .catch((e) => {
    console.error(e.message);
  });
