'use strict';

import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors';

export const findAll = (_req: Request, res: Response, _next: NextFunction) => {
  // Simulate task list, normally this would be retrieved from a database
  const tasks = [{ _id: 1, name: 'milk' }, { _id: 2, name: 'cheese' }, { _id: 3, name: 'bread' }];

  res.status(200).json(tasks);
};

export const buggyRoute = (_req: Request, _res: Response, next: NextFunction) => {
  // Simulate an error
  next(new HttpError(400, 'bad request'));
};
