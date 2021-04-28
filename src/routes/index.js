import express from 'express';
import { notFound, genericErrorHandler } from '../middleware/errorHandlers.js';
const router = express.Router();

// define route handlers
import collectionsRouter from './collectionsRouter.js';
import themesRouter from './themesRouter.js';

// basic response on Root endpoint
router.get('/', function(req, res){
    res.status(200).json({
        statusCode: 200,
        message: 'welcome to the API'
    });
});

// apply handlers to specific routes
router.use('/collections', collectionsRouter);
router.use('/themes', themesRouter);

// if none of the above routes handle the request it will error out here
router.use(notFound);
router.use(genericErrorHandler);

export default router;