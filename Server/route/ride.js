import express from 'express';
import rideController from './../controller/ride';
import rideController2 from './../controller/rides';
import rideValidator from './../middleware/ride-validator';

const router = express.Router();

router.get('/', rideController2.getAllRides);

router.get('/:id', rideController2.getSingleRide);

router.post('/', rideValidator.ride, rideController.createRide);

router.post('/:id/request', rideController.createRideRequest);

export default router;
