import db from './../model/index';

const Rides = {
    getAllRides(req, res, next) {
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
        const id = parseInt(req.params.id,10);
        const value = [parseInt(id,10)];
        db.query('SELECT * FROM rides WHERE id=$1', [id], (err, ride) => {
            console.log(ride.rows);
            if(ride.rows.length === 0) {
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
    },
    createRideRequest(req, res, next) {
        const query = 'SELECT * FROM rides WHERE id = $1';
        const value = [req.params.id];
        db.query(query, value).then((ride)=>{
           console.log(req.userData)
            if(ride.rows.length === 0){
                return res.status(404).json({
                    success: false,
                    message: 'rides not found'
                })
            }
            else{
                console.log(ride.rows)
                console.log(req.userData);
                db.query(
                    'INSERT INTO rideRequest(status, ride_id, user_id) VALUES($1, $2, $3) RETURNING *',
                    [req.body.status, parseInt(req.params.id,10), req.userData.id]
                ).then((request) => {
                    return res.status(201).json({
                        success: true,
                        message: 'Ride request created successfully',
                        data: request.rows
                    })
                }).catch((error)=>{
                    return res.status(400).json({
                        success: false,
                        message: 'error inserting in db',
                        error,
                    })
                })
            }
        }).catch((error)=>{
            return res.status(404).json({
                success: false,
                error,
            })
        })
    },
    getRideRequest(req,res){
        const query = 'SELECT users.*, rides.*, riderequest.* FROM rideRequest JOIN users ON (rideRequest.user_id = users.id) JOIN rides ON (rideRequest.ride_id = rides.id) WHERE ride.id = $1';
        const values = [parseInt(req.params.id,10)];
        db.query(query, values).then((request)=>{
            if(request.rowCount<1){
                return res.status(404).json({
                    success: false,
                    message: 'Request not found'
                })
            }
            return res.status(200).json({
                success: true,
                data: request.rows
            })
        }).catch((error)=>{
            return res.status(500).json({
                success: false,
                error
            })
        })
    }
    
}

export default Rides;