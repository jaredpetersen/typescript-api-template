'use strict';

import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors';

export const findAll = (req: Request, res: Response) => {
  // Simulate task list, normally this would be retrieved from a database
  const tasks = [
    {'_id': 1, 'name': 'milk'},
    {'_id': 2, 'name': 'cheese'},
    {'_id': 3, 'name': 'milk'}
  ];

  res.status(200).json(tasks);
};

export const buggyRoute = (req: Request, res: Response, next: NextFunction) => {
  // Simulate an error
  next(new HttpError(400, 'bad request'));
};
