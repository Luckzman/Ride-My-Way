import rideOffers from './../model/ride';

const ride = {
    getRides(req, res) {
        return res.status(200).json({
            rideOffers
        });
    },
};

export default ride;