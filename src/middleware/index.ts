'use strict';

import { NextFunction, Request, Response } from 'express';
import logger from '../logger';

export const doSomethingInteresting = (req: Request, res: Response, next: NextFunction) => {
  // Middleware goes here
  logger.log('info', `interesting middleware`);
  next();
};
