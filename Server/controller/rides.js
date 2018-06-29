import db from './../model/index';

const Rides = {
    getAllRides(req, res, next) {
        // const query = ;
        db.query('SELECT * FROM rides', (err, ride) =>{
            if(err) return next(err);
            return res.status(200).json({
                status: 'success',
                data: {
                    ride: ride.rows
                }
            })
        });
    },
    getSingleRide(req,res,next) {
        const value = [parseInt(req.params.id,10)];
        db.query('SELECT * FROM rides WHERE id=$1', [req.params.id], (err, ride) => {
            if(!ride) {
                return res.status(404).json({
                    status: false,
                    message: 'ride does not exist'
                });
            }
            else if(ride) {
                let rideDetails = [];
                ride.rows.map(newRide => {
                    if(newRide.id === parseInt(req.params.id,10)) {
                        rideDetails.push(newRide); 
                    }
                })
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
    }
    
}

export default Rides;