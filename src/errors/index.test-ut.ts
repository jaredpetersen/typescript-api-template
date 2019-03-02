'use strict';

import { HttpError, errorMiddleware, nullMiddleware } from './index';
import { Request, Response, NextFunction } from 'express';

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
      // Stub err
      const errStub = new HttpError(418, 'teapot');

      // Stub req
      const reqStub: Partial<Request> = {};

      // Mock res
      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      // Stub next
      const nextStub: NextFunction = () => {};

      // Run unit under test
      errorMiddleware(errStub, <Request>reqStub, <Response>resMock, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(errStub.status);
      expect(resMock.json).toHaveBeenCalledWith({ message: errStub.message });
    });

    test('returns an internal server error when passed a non-HttpError', () => {
      // Stub err
      const errStub = new Error('something went wrong');

      // Stub req
      const reqStub: Partial<Request> = {};

      // Mock res
      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      // Stub next
      const nextStub: NextFunction = () => {};

      // Run unit under test
      errorMiddleware(errStub, <Request>reqStub, <Response>resMock, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(500);
      expect(resMock.json).toHaveBeenCalledWith({ message: 'internal server error' });
    });
  });

  describe('nullMiddleware()', () => {

    test('returns a not found error message', () => {
      // Stub req
      const reqStub: Partial<Request> = {};

      // Mock res
      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      // Stub next
      const nextStub: NextFunction = () => {};

      // Run unit under test
      nullMiddleware(<Request>reqStub, <Response>resMock, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(404);
      expect(resMock.json).toHaveBeenCalledWith({ message: 'not found' });
    });
  });

});