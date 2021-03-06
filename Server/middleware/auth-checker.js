import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.userData = decode;
    console.log(req.userData);
    next();
  } catch (error) {
    return res.status(401).json({
      status: 'fail',
      message: 'Authentication failed',
    });
  }
};