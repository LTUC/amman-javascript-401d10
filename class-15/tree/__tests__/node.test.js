const Node = require('../node');

describe('Node', () => {
  it('create an instance of the Node class', () => {
    const node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });

  it('create node instance with the correct properties', () => {
    const value = 'some value';
    const node = new Node(value);
    expect(node.val).toEqual(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});
