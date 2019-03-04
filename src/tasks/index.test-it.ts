'use strict';

import request from 'supertest';
import app from '../app';

describe('Tasks - IT', () => {
  describe('findAll()', () => {
    test('returns all tasks', async () => {
      const result = await request(app).get('/tasks');

      expect(result.status).toEqual(200);
      expect(result.body).toEqual([
        { _id: 1, name: 'milk' },
        { _id: 2, name: 'cheese' },
        { _id: 3, name: 'bread' }
      ]);
    });
  });

  describe('buggyRoute()', () => {
    test('returns a 400 error', async () => {
      const result = await request(app).post('/tasks');

      expect(result.status).toEqual(400);
      expect(result.body).toEqual({ message: 'bad request' });
    });
  });
});
