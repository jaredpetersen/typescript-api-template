'use strict';

import { Request, Response, NextFunction } from 'express';

// Special error type for error route handling
export class HttpError {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

// Handle any errors that come up
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ 'message': err.message });
  }
  else {
    res.status(500).json({ message: 'internal server error' });
  }
};

// Handle case where user requests nonexistent endpoint
export const nullRoute = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'not found' });
};
