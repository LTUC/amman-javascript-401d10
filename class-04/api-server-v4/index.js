'use strict';
require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');
const PORT = process.env.port || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    server.start(PORT);
  })
  .catch((e) => {
    console.error('CONNECTION ERROR', e.message);
  });
