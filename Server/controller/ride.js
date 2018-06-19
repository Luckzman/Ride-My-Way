import rideOffers from './../model/ride';

const ride = {
    getAllRides(req, res) {
        return res.status(200).json({
            rideOffers
        });
    },
    getSingleRide(req, res) {
        for (let i = 0; i < rideOffers.length; i += 1) {
            if (rideOffers[i].id === parseInt(req.params.id, 10)) {
              return res.status(200).json(rideOffers[i]);
            }
        }
        return res.status(404).json({
            message: 'Ride offer not found',
        });
    }
};

export default ride;