import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from './../model/index';

const User = {
    createUser(req, res, next) {
        const query = 'SELECT * FROM users WHERE email = $1';
        const value = [req.body.email];
        db.query(query, value).then((user)=>{
            console.log(user.rows);
            if(user.rows.length>0){
                return res.status(400).json({
                    success: false,
                    message: 'Email already exist'
                })
            } 
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
                    return res.status(201).json({
                        success: true,
                        data: {
                            user: user.rows[0]
                        }
                    });
            
                }).catch((error)=>{
                    return res.status(400).json({
                        success: false,
                        message: 'Bad Request',
                        error
                    })
                });
            
        }).catch((error)=>{
            return res.status(500).json({
                success: false,
                message: 'Server Error',
                error
            })
        })
    }).catch((error)=>{
            return res.status(500).json({
                success: false,
                message: 'Server Error',
                error
            })
        })
    },
    loginUser(req, res, next) {
        /* include jwt  */
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [req.body.email];

        db.query(query, values).then((user) => {
            if(user.rows.length===0){
                return res.status(404).json({
                    success: false,
                    message: 'user not available'
                })
            } else{
                bcrypt.compare(req.body.password, user.rows[0].password)
                    .then((result)=>{
                        if(result){
                            const token = jwt.sign({
                                email: user.rows[0].email,
                                id: user.rows[0].id
                                }, process.env.SECRET_KEY,
                                {
                                    expiresIn: '6h'
                                }
                            )
                            return res.status(200).json({
                                success: true,
                                message: 'User signin successful',
                                token
                            })
                        } 
                        return res.status(400).json({
                            success: false,
                            message: 'Incorrect password'
                        })
                        
                    }).catch((error)=>{
                        res.status(500).json({
                            success: false,
                            message: 'Server Error',
                            error
                        })
                    });
                }
            });
                
    }
};

export default User;