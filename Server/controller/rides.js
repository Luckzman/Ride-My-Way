import db from './../model/index';

const Rides = {
    getAllRides(req, res, next) {
        const query = 'SELECT * FROM rides';
        db.query(query, (err, rides) =>{
            if(err) return next(err);
            return res.status(200).json({
                status: 'success',
                data: {
                    rides: rides.rows
                }
            })
        });
    },
}

export default Rides;