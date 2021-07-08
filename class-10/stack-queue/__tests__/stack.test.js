const Stack = require('../stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('Creates an instance of Stack', () => {
    expect(stack instanceof Stack).toBeTruthy();
  });

  describe('peek', () => {
    it('return null on empty Stack', () => {
      expect(stack.peek()).toBeNull();
    });
    it('return last item added on the Stack', () => {
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });
    it('does not alter the stack', () => {
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      expect(stack.peek()).toEqual(1);
    });
    it('point to the correct item after pop() on the stack', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toEqual(2);
      expect(stack.peek()).toEqual(1);
    });
  });
  describe('push', () => {
    it('add items to the top of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.peek()).toEqual(3);
    });
  });
  describe('pop', () => {
    it('add items to the top of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
      expect(stack.peek()).toBeNull();
    });
  });
});
