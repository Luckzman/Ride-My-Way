import express from 'express';
import rideController from './../controller/ride';
import rideController2 from './../controller/rides';
// import rideValidator from './../middleware/ride-validator';
import userController from './../controller/user';

const router = express.Router();
router.post('/auth/signup', userController.createUser);

router.post('/auth/login', userController.loginUser);

router.get('/rides', rideController2.getAllRides);

router.get('/rides/:id', rideController2.getSingleRide);

router.post('/users/rides', rideController2.createRide);

router.get('/rides', rideController.getAllRides);

router.get('/rides/:id', rideController.getSingleRide);

router.post('/users/rides', rideController.createRide);

router.post('/rides/:id/request', rideController.createRideRequest);


export default router;
