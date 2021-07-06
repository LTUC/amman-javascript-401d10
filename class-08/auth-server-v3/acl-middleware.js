'use strict';

module.exports = (capability) => {
  return (req, res, next) => {
    // since this is called after the bearer we expect to have req.user
    console.log('ACL USER', req.user);
    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      } else {
        next('Access Denied');
      }
    } catch (error) {
      next(error.message);
    }
  };
};
