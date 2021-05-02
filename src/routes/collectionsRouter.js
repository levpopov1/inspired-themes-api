import express from 'express';
import mongoose from 'mongoose';
import * as collectionsController from '../controllers/collectionsController.js';
import findByID from '../middleware/findById.js';
import findAll from '../middleware/findAll.js';

const router = express.Router();
const Collection = mongoose.model('Collection');

router.get('/', findAll(Collection), collectionsController.getAll);
router.get('/:id', findByID(Collection), collectionsController.getOne);

// router.post('/', collectionsController.post);

export default router;