'use strict';

const base64 = require('base-64');
const User = require('./user');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    next('Invalid Login');
    return;
  }

  let authHeaders = req.headers.authorization.split(' ');
  if (authHeaders[0] !== 'Basic') {
    next('Invalid Login');
    return;
  }
  const [user, pass] = base64.decode(authHeaders[1]).split(':');
  try {
    const validUser = await User.authenticateBasic(user, pass);
    req.token = User.generateToken(validUser);
    next();
  } catch (error) {
    next('Invalid Login');
  }
};
