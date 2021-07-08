class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(item) {
    this.storage.push(item);
  }
  dequeue() {
    return this.storage.shift();
  }
  peek() {
    return this.storage[0];
  }
}

module.exports = Queue;
