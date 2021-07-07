'use strict';

const mongoose = require('mongoose');


const personSchema = mongoose.Schema({
  name:{type:String ,required:true},
  role:{type:String}
})

const personModel = mongoose.model('person',personSchema)

module.exports = personModel;