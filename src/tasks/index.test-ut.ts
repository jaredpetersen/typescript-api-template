'use strict';

import * as tasks from './index';
import { Request, Response, NextFunction } from 'express';

describe('Tasks - UT', () => {

  describe('findAll()', () => {

    test('returns all tasks', () => {
      // Stub req
      const reqStub: Partial<Request> = {};

      // Mock res
      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      // Stub next
      const nextStub: NextFunction = () => {};

      // Run unit under test
      tasks.findAll(<Request>reqStub, <Response>resMock, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(200);
      expect(resMock.json).toHaveBeenCalledWith([
        {'_id': 1, 'name': 'milk'},
        {'_id': 2, 'name': 'cheese'},
        {'_id': 3, 'name': 'bread'}
      ]);
    });
  });

});