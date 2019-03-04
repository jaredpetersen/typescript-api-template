'use strict';

import { NextFunction, Request, Response } from 'express';
import * as tasks from './index';

describe('Tasks - UT', () => {
  describe('findAll()', () => {
    test('returns all tasks', () => {
      const reqStub: Partial<Request> = {};

      const resMock: Partial<Response> = {};
      resMock.status = jest.fn().mockReturnValue(resMock);
      resMock.json = jest.fn().mockReturnValue(resMock);

      const nextStub: NextFunction = () => {
        // Do nothing
      };

      tasks.findAll(reqStub as Request, resMock as Response, nextStub);

      expect(resMock.status).toHaveBeenCalledWith(200);
      expect(resMock.json).toHaveBeenCalledWith([
        { _id: 1, name: 'milk' },
        { _id: 2, name: 'cheese' },
        { _id: 3, name: 'bread' }
      ]);
    });
  });
});
