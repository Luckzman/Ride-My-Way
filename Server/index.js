import express from 'express';
import router from './route/index';

const app = express();
app.use('/', router);

export default app;
