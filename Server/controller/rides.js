import db from './../model/index';

const Rides = {
    getAllRides(req, res, next) {
        // const query = ;
        db.query('SELECT * FROM rides', (err, ride) =>{
            if(err) return next(err);
            console.log(req.userData);
            return res.status(200).json({
                status: 'true',
                data: {
                    ride: ride.rows
                }
            })
        });
    },
    getSingleRide(req,res,next) {
        const value = [parseInt(req.params.id,10)];
        db.query('SELECT * FROM rides WHERE id=$1', [req.params.id], (err, ride) => {
            if(ride) {
                let rideDetails = [];
                ride.rows.map(newRide => {
                    if(newRide.id === parseInt(req.params.id,10)) {
                        rideDetails.push(newRide); 
                    }
                })
                if(rideDetails.length === 0){
                    return res.status(404).json({
                        status: false,
                        message: 'Ride not available'
                    })
                }
                return res.status(200).json({
                    status: true,
                    data: {
                        ride: ride.rows
                    }
                })
            }
            else {
                (err) => {
                    return next(err);
                }
            }
            
        });
    },
    createRide(req, res, next) {
        const query = 'INSERT INTO rides(source, destination, departure_time, car_name, available_seat, cost, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const value = [req.body.source, req.body.destination, req.body.deparure_time, req.body.car_name,req.body.available_seat, req.body.cost, req.userData.id];
        console.log(req.userData);
        db.query(query, value, (err, ride)=>{
            if(err) return next(err);
            return res.status(201).json({
                status: true,
                data: {
                    ride: ride.rows
                }
            });
        });
    }
    
}

export default Rides;