import express from 'express';
import rideController from './../controller/ride';

const router = express.Router();

router.get('/', rideController.getAllRides);

router.get('/:id', rideController.getSingleRide);

router.post('/', rideController.createRide);

router.post('/:id/request', (req, res) => {
  res.json(`post /ride/${req.params.id}/request successful`);
});

export default router;
