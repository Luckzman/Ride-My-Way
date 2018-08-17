import express from 'express';
import rideController from './../controller/ride';
import rideController2 from './../controller/rides';
import rideController3 from './../controller/request';
// import rideValidator from './../middleware/ride-validator';
import userController from './../controller/user';
import authChecker from './../middleware/auth-checker';

const router = express.Router();
/* challenge 2 routes */
router.get('/rides', rideController.getAllRides);

router.get('/rides/:id', rideController.getSingleRide)

router.post('/rides/:id', rideController.createRide)

router.post('/rides/:id/request', rideController.createRideRequest);

/* challenge 3 routes */
router.post('/auth/signup', userController.createUser);

router.post('/auth/login', userController.loginUser);

router.get('/rides', rideController2.getAllRides);

router.get('/rides/:id', rideController2.getSingleRide);

router.post('/users/rides', authChecker, rideController2.createRide);


// router.post('/users/rides', rideController.createRide);



router.post('/rides/:id/requests', authChecker, rideController2.createRideRequest);
router.get('/users/rides/:id/requests', authChecker, rideController2.getRideRequest);


export default router;
