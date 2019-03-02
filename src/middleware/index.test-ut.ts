'use strict';

import * as middleware from './index';
import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

jest.mock('../logger');

describe('Middleware - UT', () => {

  describe('doSomethingInteresting()', () => {

    test('logs something', () => {
      // Stub req
      const reqStub: Partial<Request> = {};

      // Mock res
      const resMock: Partial<Response> = {};

      // Stub next
      const nextStub: NextFunction = () => {};

      // Run unit under test
      middleware.doSomethingInteresting(<Request>reqStub, <Response>resMock, nextStub);

      expect(logger.log).toHaveBeenCalledWith('info', 'interesting middleware');
    });

  });

});