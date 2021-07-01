'use strict';

const Node = require('../node');

describe('Node Module', () => {
  it('create an instance with value and next', () => {
    const value = 'some value';
    const node = new Node(value);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
