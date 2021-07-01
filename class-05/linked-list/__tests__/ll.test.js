'use strict';
const LinkedList = require('../ll');

describe('Linked List', () => {
  it('Should Instantiate', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe('insert to the head', () => {
  it('should add to empty list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });
  it('should add to a list with values', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
  });
});

describe('append to the end of the list', () => {
  it('should append to empty list', () => {
    const ll = new LinkedList();
    ll.append('a');
    expect(ll.head.value).toEqual('a');
    ll.append('b');
    expect(ll.head.value).toEqual('a');
  });
  it('should append to list with values', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('c');
    expect(ll.head.next.next.next).toBeNull();
  });
});
