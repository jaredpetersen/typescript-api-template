'use strict';

import request from 'supertest';
import server from '../server';

describe('Health - IT', () => {

  describe('status()', () => {

    test('provides health status', async () => {
      const result = await request(server).get('/health');

      expect(result.status).toEqual(200);
      expect(result.body).toEqual({ status: 'UP' });
    });
  });

});