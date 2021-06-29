const express = require('express');
const Person = require('../models/person');
const validator = require('../middlewares/validator');
const router = express.Router();
const person = new Person();

router.get('/', getPeople);

router.get('/:id', getPeople);

router.post('/', validator, createPerson);

router.put('/:id', validator, updatePerson);

router.delete('/:id', deletePerson);

function getPeople(req, res) {
  const resObj = person.read(req.params.id);
  res.json(resObj);
}
function createPerson(req, res) {
  const resObj = person.create(req.body);
  res.json(resObj);
}
function updatePerson(req, res) {
  const resObj = person.update(req.params.id, req.body);
  res.json(resObj);
}
function deletePerson(req, res) {
  const resObj = person.delete(req.params.id);
  res.json(resObj);
}
module.exports = router;
