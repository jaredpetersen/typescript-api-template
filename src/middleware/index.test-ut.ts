'use strict';

import logger from '../logger';
import * as middleware from './index';
import { Request, Response, NextFunction } from 'express';

jest.mock('../logger');

describe('Middleware - UT', () => {

  describe('doSomethingInteresting()', () => {

    test('logs something', () => {
      const reqStub: Partial<Request> = {};
      const resMock: Partial<Response> = {};
      const nextStub: NextFunction = () => {};

      middleware.doSomethingInteresting(<Request>reqStub, <Response>resMock, nextStub);

      expect(logger.log).toHaveBeenCalledWith('info', 'interesting middleware');
    });

  });

});