'use strict';
const express = require('express');
const router = express.Router();
const personModel = require('../models/person');
const Interface = require('../models/interface');
const person = new Interface(personModel);

router.get('/', getPerson);
router.get('/:id', getPerson);
router.post('/', createPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

async function getPerson(req, res, next) {
  try {
    const id = req.params.id;
    const people = await person.read(id);
    res.json({ people });
  } catch (e) {
    next(e);
  }
}

async function createPerson(req, res, next) {
  try {
    const data = req.body;
    const newPerson = await person.create(data);
    res.json(newPerson);
  } catch (e) {
    next(e);
  }
}
async function updatePerson(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const newPerson = await person.update(id, data);
    res.json(newPerson);
  } catch (e) {
    next(e);
  }
}
async function deletePerson(req, res, next) {
  try {
    const id = req.params.id;
    const deletedPerson = await person.delete(id);
    res.json(deletedPerson);
  } catch (e) {
    next(e);
  }
}
module.exports = router;
