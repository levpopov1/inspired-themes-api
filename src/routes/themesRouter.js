import express from 'express';
import mongoose from 'mongoose';
import * as themesController from '../controllers/themesController.js';
import findByID from '../middleware/findById.js';
import findAll from '../middleware/findAll.js';

const router = express.Router();
const Theme = mongoose.model('Theme');

router.get('/', findAll(Theme), themesController.getAll);
router.get('/:id', findByID(Theme), themesController.getOne);

// router.post('/', themesController.post);

export default router;