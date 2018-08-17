import express from 'express';
import rideRouter from './ride';

const router = express.Router();
router.use('/api/v1', rideRouter);

export default router;
