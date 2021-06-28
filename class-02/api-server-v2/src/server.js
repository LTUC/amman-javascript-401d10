'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middlewares/logger')
const app = express();
// Global Middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger)
// both middlewares will add body property to the req 


// route specific middleware
function square(n){
  return (req,res,next)=>{
    if(typeof n !== 'number'){
      next('Not a number!')
    }else {
      req.number = n * n;
      next();
    }
  }
}

  function square1 (req,res,next){
    if(typeof Number(req.params.number) !== 'number'){
      next('Not a number!')
    }else {
      req.number = req.params.number * req.params.number;
      next();
    }
  }


app.get('/middleware',square(10),(req,res)=>{
  console.log('square number',req.number);
  res.json({number:req.number})
})
app.get('/middleware/:number',square1,(req,res)=>{
  console.log('square number',req.number);
  res.json({number:req.number})
})
// basicc routes 

// GET http://localhost:3000/fruit?type=apple

app.get('/fruit',(req,res)=>{
  const output = {
    type:req.query.type
  }
  res.json(output)
})

// GET http://localhost:3000/fruit/apple
// GET http://localhost:3000/fruit/orange
app.get('/fruit/:type',(req,res)=>{
  const output = {
    type:req.params.type
  }
  res.json(output)
})

// POST http://localhost:3000/fruit/ {type:apple}

app.post('/fruit',(req,res)=>{
  console.log(`my req body`,req.body)
  res.json({message:'fuit added'})
})

app.put('/fruit/:fruit_id',(req,res)=>{
  console.log(`my req body`,req.params.fruit_id,req.body)
  res.json({message:'fuit updated'})
})
app.get('/bad',(req,res)=>{
  throw new Error('Error');
})

app.use('*',notFoundHandler);
app.use(errorHandler)

module.exports = {
  server:app,
  start:(port)=>{
    app.listen(port,()=>console.log(`Listening on ${port}`))
  }
}