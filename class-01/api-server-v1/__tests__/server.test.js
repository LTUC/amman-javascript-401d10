xtest('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(5);
});

('use strict');
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('API Server', () => {
  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  it('handles correct routes', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});
