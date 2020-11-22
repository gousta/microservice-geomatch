/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as routes from './app/routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes.init(app);

export default app;
