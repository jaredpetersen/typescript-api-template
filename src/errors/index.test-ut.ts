'use strict';

import { NextFunction, Request, Response } from 'express';
import { errorMiddleware, HttpError, nullMiddleware } from './index';

describe('Errors - UT', () => {
  describe('HttpError', () => {
    test('creates new error', () => {
      const statusStub = 400;
      const messageStub = 'something went wrong';

      const err = new HttpError(statusStub, messageStub);

      expect(err.status).toEqual(statusStub);
      expect(err.message).toEqual(messageStub);
    });
  });

  describe('errorMiddleware()', () => {
    test('returns an error message based on the passed in HttpError', () => {
      const errStub = new HttpError(418, 'teapot');

      const reqStub: Partial<Request> = {};

      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      const nextStub: NextFunction = () => {
        // Do nothing
      };

      errorMiddleware(errStub, reqStub as Request, resMock as Response, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(errStub.status);
      expect(resMock.json).toHaveBeenCalledWith({ message: errStub.message });
    });

    test('returns an internal server error when passed a non-HttpError', () => {
      const errStub = new Error('something went wrong');

      const reqStub: Partial<Request> = {};

      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      const nextStub: NextFunction = () => {
        // Do nothing
      };

      errorMiddleware(errStub, reqStub as Request, resMock as Response, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(500);
      expect(resMock.json).toHaveBeenCalledWith({ message: 'internal server error' });
    });
  });

  describe('nullMiddleware()', () => {
    test('returns a not found error message', () => {
      const reqStub: Partial<Request> = {};

      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      const nextStub: NextFunction = () => {
        // Do nothing
      };

      nullMiddleware(reqStub as Request, resMock as Response, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(404);
      expect(resMock.json).toHaveBeenCalledWith({ message: 'not found' });
    });
  });
});
