'use strict';
const Node = require('./node');
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    // this.head = new Node(value, this.head);
    // longer way
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }
}
module.exports = LinkedList;
