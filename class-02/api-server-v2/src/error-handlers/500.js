'use strict';
module.exports = (err,req,res,next)=>{
// sometimes error come in as an object or string
const error = err.message ? err.message : err;
  res.status(500).json({error})
}

