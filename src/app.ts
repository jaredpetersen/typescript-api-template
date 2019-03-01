'use strict';

import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import logger from './logger';

const app = express();

// Set up middleware for request parsing, logging, etc.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('short', { stream: { write: (message: string) => logger.info(message.trim()) } }));

// Load up the routes
app.use('/', routes);

export default app;
