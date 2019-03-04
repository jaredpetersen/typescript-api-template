'use strict';

import { NextFunction, Request, Response } from 'express';
import logger from '../logger';
import * as middleware from './index';

jest.mock('../logger');

describe('Middleware - UT', () => {
  describe('doSomethingInteresting()', () => {
    test('logs something', () => {
      const reqStub: Partial<Request> = {};
      const resMock: Partial<Response> = {};
      const nextStub: NextFunction = () => {
        // Do nothing
      };

      middleware.doSomethingInteresting(reqStub as Request, resMock as Response, nextStub);

      expect(logger.log).toHaveBeenCalledWith('info', 'interesting middleware');
    });
  });
});
