class Stack {
  constructor() {
    // you will use linkedlist
    this.storage = [];
    this.top = null;
  }

  peek() {
    return this.top;
  }
  push(item) {
    this.storage.unshift(item);
    this.top = item;
  }
  pop() {
    const item = this.storage.shift();
    this.top = this.storage[0] ? this.storage[0] : null;
    return item;
  }
}

module.exports = Stack;
