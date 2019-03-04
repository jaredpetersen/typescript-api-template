'use strict';

import { NextFunction, Request, Response } from 'express';

// Special error type for error route handling
export class HttpError {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

// Handle any errors that come up
export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'internal server error' });
  }
};

// Handle case where user requests nonexistent endpoint
export const nullMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'not found' });
};
