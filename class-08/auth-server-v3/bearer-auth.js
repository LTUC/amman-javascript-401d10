'use strict';

const User = require('./user');

module.exports = async (req, res, next) => {
  // req.headers.authorization: 'Bearer asdads.asdsad.sdsd'
  if (!req.headers.authorization) {
    console.log('Hi', req.headers.authorization);
    next('missing auth headers!');
    return;
  }
  const headers = req.headers.authorization.split(' ');
  if (headers[0] !== 'Bearer') {
    next('invalid auth headers!');
    return;
  }
  try {
    const validUser = await User.authenticateToken(headers[1]);
    req.user = validUser;
    next();
  } catch (error) {
    next(error.message);
  }
};
