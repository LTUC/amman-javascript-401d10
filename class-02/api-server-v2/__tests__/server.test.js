const {server} = require('../src/server')
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server',()=>{
  it('Should return type',async ()=>{
    const query = 'apple'
 const response = await mockRequest.get(`/fruit?type=${query}`);
 expect(response.body.type).toEqual(query)
 expect(response.status).toBe(200)
  })
})