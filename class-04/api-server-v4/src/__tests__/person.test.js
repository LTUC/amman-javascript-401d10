'use strict';
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../server');
const mockRequest = supergoose(app);

describe('API SERVER', () => {
  it('can create a new person', async () => {
    let personObj = { name: 'test', role: 'test' };
    const res = await mockRequest.post('/api/v1/person').send(personObj);
    expect(res.body.name).toBe(personObj.name);
    expect(res.body.role).toBe(personObj.role);
  });
  it('can get a person after creation', async () => {
    let personObj = { name: 'test', role: 'test' };
    const res = await mockRequest.get('/api/v1/person');
    expect(res.body.people[0].name).toBe(personObj.name);
    expect(res.body.people[0].role).toBe(personObj.role);
    expect(res.body.people.length).toBe(1);
  });
});
