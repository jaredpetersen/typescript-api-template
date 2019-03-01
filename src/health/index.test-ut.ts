'use strict';

import * as health from './index';
import { Request, Response, NextFunction } from 'express';

describe('Health - UT', () => {

  describe('status()', () => {

    test('provides health status', () => {
      // Stub req
      const reqStub: Partial<Request> = {};

      // Mock res
      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      // Stub next
      const nextStub: NextFunction = () => {};

      // Run unit under test
      health.status(<Request>reqStub, <Response>resMock, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(200);
      expect(resMock.json).toHaveBeenCalledWith({ status: 'UP' });
    });
  });

});