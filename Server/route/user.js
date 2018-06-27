import express from 'express';
import user from './../controller/user';

const router = express.Router();

router.post('/signin', user.createUser);

export default router;
