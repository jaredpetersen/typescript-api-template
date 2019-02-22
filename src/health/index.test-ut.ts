'use strict';

import { expect } from 'chai'
import * as health from './index';
import { Request, Response, NextFunction } from 'express';
import 'mocha';

describe('Health - UT', () => {

  describe('status()', () => {

    it('provides health status', (done) => {
      // Stub req
      const reqStub: Request = null;

      // Mock res
      const resMock: Partial<Response> = {};
      resMock.status = (code: number) => {
        expect(code).to.equal(200);
        return <Response>resMock;
      };
      resMock.json = (body?: any) => {
        expect(body).to.deep.equal({ status: 'UP' });
        done();
        return this;
      };

      // Stub next
      const nextStub: NextFunction = null;

      // Run unit under test
      health.status(reqStub, <Response>resMock, nextStub);
    });
  });

});