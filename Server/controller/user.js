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
            });
      
        });
    },
    loginUser(req, res, next) {
        const query = 'SELECT email, password FROM users WHERE email = $1';
        const values = [req.body.email];

        db.query(query, values, (err, user) => {
            if(!user){
                return res.status(404).json({
                    success: false,
                    message: 'user not available'
                })
            }
            else if(user){
                let newUser = '';
                user.rows.map(data => {
                    if(req.body.password === data.password) {
                        newUser = data.password;      
                    }
                })
                if(req.body.password !== newUser){
                    return res.status(400).json({
                        success: false,
                        message: 'Incorrect password'
                    })
                }
                return res.status(200).json({
                    success: true,
                    message: 'User signin successful'
                })
            }
            else {
                return next(err)
            }
        });
    }
};

export default User;