import express from 'express';
import rideController from './../controller/ride';
import rideValidator from './../middleware/ride-validator';

const router = express.Router();

router.get('/', rideController.getAllRides);

router.get('/:id', rideController.getSingleRide);

router.post('/', rideValidator.ride, rideController.createRide);

router.post('/:id/request', rideController.createRideRequest);

export default router;
