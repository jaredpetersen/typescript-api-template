'use strict';

import { NextFunction, Request, Response } from 'express';

export const status = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ status: 'UP' });
};
