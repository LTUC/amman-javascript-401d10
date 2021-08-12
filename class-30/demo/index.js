class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  //key = name ==> 400
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  set(key, value) {
    // get an index
    const hash = this.hash(key);
    console.log('Key', hash);
    // we need to check if a value already exist in the index
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll; // [222] = {head:{value:{"key","value"},next:null}}
    } else {
      this.storage[hash].prepend({ [key]: value });
    }
  }
}

const hashmap = new Hashmap(4000);
hashmap.set('name', 'mahmoud');
hashmap.set('one', 'test');
hashmap.set('neo', 'test1');

console.table(hashmap.storage);
console.table(hashmap.storage[2118].head);
