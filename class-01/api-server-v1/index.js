'use strict';
const server = require('./server');
require('dotenv').config();
server.start(process.env.PORT || 5000);
