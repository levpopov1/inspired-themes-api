const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const themesController = require('../controllers/themesController');
const Theme = mongoose.model('Theme');

const findByID = require('../middleware/findById');
const findAll = require('../middleware/findAll');


router.get('/', findAll(Theme), themesController.getAll);
router.get('/:id', findByID(Theme), themesController.getOne);

router.post('/', themesController.post);



module.exports = router;