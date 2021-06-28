'use strict';
const loggerMiddleware = require('../src/middlewares/logger');

describe('Logger Middleware',()=>{

  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn()

  beforeEach(()=>{
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
  })
  afterEach(()=>{
    consoleSpy.mockRestore();
  })

  it('logs output correctly',()=>{
    loggerMiddleware(req,res,next);
    expect(consoleSpy).toHaveBeenCalled()
  })
  it('moves to the next middleware',()=>{
    loggerMiddleware(req,res,next);
    expect(next).toHaveBeenCalledWith();
  })
})