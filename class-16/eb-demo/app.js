const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/data',(req,res)=>{
  res.json({a:1,b:2})
})

app.listen(PORT,()=>console.log(`Listening on Port ${PORT}`))