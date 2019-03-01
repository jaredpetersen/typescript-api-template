'use strict';

import request from 'supertest';
import app from '../app';

describe('Health - IT', () => {

  describe('status()', () => {

    test('provides health status', async () => {
      const result = await request(app).get('/health');

      expect(result.status).toEqual(200);
      expect(result.body).toEqual({ status: 'UP' });
    });
  });

});