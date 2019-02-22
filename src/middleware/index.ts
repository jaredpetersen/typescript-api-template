'use strict';

import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

export const doSomethingInteresting = (req: Request, res: Response, next: NextFunction) => {
  // Middleware goes here
  logger.log('info', `interesting middleware`);
  next();
};