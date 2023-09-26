class Element {
  constructor(value, next = null) {
    this.value = value;
    this.nextEl = next;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextEl;
  }

  isTail() {
    return !this.nextEl;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(val) {
    let element;
    if (this.head()) {
      element = new Element(val, this.head());
    } else {
      element = new Element(val);
    }
    this.list.push(element);
  }

  pop() {
    return this.list.pop().datum();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.list[this.size() - 1].datum();
  }

  head() {
    return this.list[this.size() - 1];
  }

  toArray() {
    let arr = [];

    this.list.forEach((el) => arr.push(el.datum()));

    return arr.reverse();
  }

  reverse() {
    let arr = this.toArray().reverse();

    let list = SimpleLinkedList.fromArray(arr);

    return list;
  }

  static fromArray(arr) {
    let list = new SimpleLinkedList();
    if (!arr) return list;
    arr = arr.slice(0);

    arr.reverse().forEach((el) => list.push(el));
    return list;
  }
}

module.exports = { Element, SimpleLinkedList };
