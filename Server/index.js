import express from 'express';
import bodyParser from 'body-parser';
import router from './route/index';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/', router);

export default app;
