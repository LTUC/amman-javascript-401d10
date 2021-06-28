'use strict';
// every middleware have to have 3 params req,res,next
// every middleware have to call the next function in the end of the middleware
// if next called with string that means stop and go to the error handler
module.exports = (req,res,next)=>{
console.log('__REQUEST__',req.method,req.path);
next()
}