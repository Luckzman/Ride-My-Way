import express from 'express';
import rideRouter from './ride';
import userRouter from './user';

const router = express.Router();
router.use('/api/v1/rides', rideRouter);
router.use('/api/v1/auth', userRouter);

export default router;
