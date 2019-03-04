'use strict';

import request from 'supertest';
import app from '../app';

describe('Errors - IT', () => {
  describe('nullMiddleware()', () => {
    test('returns a 404 error', async () => {
      const result = await request(app).post('/thisroutedoesnotexist');

      expect(result.status).toEqual(404);
      expect(result.body).toEqual({ message: 'not found' });
    });
  });
});
