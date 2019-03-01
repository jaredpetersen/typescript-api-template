'use strict';

// Have to hoist the module mocks due to a bug in ts-jest
// Would normally never, ever mock logging since it tightly couples tests to implementation
// with little gain. However, we do so here since we want to show how to test our middleware.
jest.mock('../logger');

import * as middleware from './index';
import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

describe('Middleware - UT', () => {

  // TODO look at restoring mocks between tests

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