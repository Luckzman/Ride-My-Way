import bcrypt from 'bcrypt';
import db from './../model/index';

const User = {
    createUser(req, res, next) {
        bcrypt.hash(req.body.password, 10).then((hash) =>{
            const query = 'INSERT INTO users(firstname, lastname, email, password, phone) VALUES($1, $2, $3, $4, $5)  RETURNING *';
            const values= [
                req.body.firstname, 
                req.body.lastname, 
                req.body.email, 
                hash, 
                req.body.phone
            ];
            db.query(query, values).then((user) => {
                res.status(201).json({
                    success: true,
                    data: {
                        user: user.rows[0]
                    }
                });
          
            }).catch((error)=>{
                res.status(400).json({
                    success: false,
                    message: 'Bad Request',
                    error
                })
            });
        }).catch((error)=>{
            res.status(500).json({
                success: false,
                message: 'Server Error',
                error
            })
        })

        
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