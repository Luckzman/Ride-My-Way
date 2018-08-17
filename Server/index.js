import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import logger from 'morgan';
import router from './route/index';

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(logger('dev'));
app.use('/', router);

export default app;
