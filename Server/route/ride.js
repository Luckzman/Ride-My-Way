import express from 'express';
import rideController from './../controller/ride';
import rideController2 from './../controller/rides';
import rideController3 from './../controller/request';
// import rideValidator from './../middleware/ride-validator';
import userController from './../controller/user';

const router = express.Router();
router.get('/rides', rideController.getAllRides);

router.get('/rides/:id', rideController.getSingleRide)

router.post('/rides/:id', rideController.createRide)

router.post('/rides/:id/request', rideController.createRideRequest);

router.post('/auth/signup', userController.createUser);

router.post('/auth/login', userController.loginUser);

router.get('/rides', rideController2.getAllRides);

router.get('/rides/:id', rideController2.getSingleRide);

router.post('/users/rides', rideController2.createRide);


router.post('/users/rides', rideController.createRide);



router.post('/rides/:id/request', rideController3.createRequest);


export default router;
