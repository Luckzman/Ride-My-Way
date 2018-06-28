import db from './../model/index';

const User = {
    createUser(req, res, next) {
        const query = 'INSERT INTO users(firstname, lastname, email, password, phone) VALUES($1, $2, $3, $4, $5)  RETURNING *';
        
        const values= [req.body.firstname, req.body.lastname, req.body.email, req.body.password, req.body.phone];
          
        db.query(query, values, (err, user) => {
            if (err) return next(err);
            res.status(201).json({
                status: 'success',
                data: {
                    user: user.rows[0]
                }
                // user: user.rows[0]
            });
      
        });
    },
};

export default User;