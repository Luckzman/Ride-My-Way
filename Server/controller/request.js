import db from './../model/index';

const Request = {
    createRequest(req, res, next) {
        const query = 'INSERT INTO request(request_ride, message) VALUES($1, $2) RETURNING *';
        const value = [req.body.request_ride, req.body.message, parseInt(req.params.id,10)];
        db.query(query, value, (err, reqObj) => {
            
            if(reqObj) {
                let newRequest = [];
                reqObj.rows.map(newReqObj => {
                    if(newReqObj.id === req.params.id) {
                        newRequest.push(newReqObj);
                    } 
                });
                if(newRequest){
                    return res.status(201).json({
                        status: true,
                        data: {
                            newRequest
                        }
                    });
                }
            }
            else (err) => { return next(err)};
        });
    }
};

export default Request;