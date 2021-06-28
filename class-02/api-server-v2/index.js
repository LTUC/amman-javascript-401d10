'use strict';
require('dotenv').config();
const server = require('./src/server');

server.start(process.env.PORT || 3000)