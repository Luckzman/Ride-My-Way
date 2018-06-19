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
    },
    createRide(req, res) {
        const newRide = {
            id: rideOffers.length + 1,
            name: req.body.name,
            source: req.body.source,
            destination: req.body.destination,
            departure_time: req.body.departure_time,
            car: req.body.car,
            available_seats: req.body.available_seats,
            cost: req.body.cost,
        };
        rideOffers.push(newRide);
        res.status(201).json({
            message: 'Ride offer successfully added',
            NewRide: newRide,
        });
    }

};

export default ride;