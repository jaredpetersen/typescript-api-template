'use strict';

import { NextFunction, Request, Response } from 'express';
import * as health from './index';

describe('Health - UT', () => {
  describe('status()', () => {
    test('provides health status', () => {
      const reqStub: Partial<Request> = {};

      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      const nextStub: NextFunction = () => {
        // Do nothing
      };

      health.status(reqStub as Request, resMock as Response, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(200);
      expect(resMock.json).toHaveBeenCalledWith({ status: 'UP' });
    });
  });
});
