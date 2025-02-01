import { Comparator } from "../../utils/Comparator";
import { LinkedListNode } from "./LinkedListNode";

export class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  compare: Comparator<T>;

  constructor(comparatorFunction?: (a: T, b: T) => number) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value: T) {
    const node = new LinkedListNode(value, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    return this;
  }

  append(value: T) {
    const node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.tail!.next = node;
    this.tail = node;
    return this;
  }

  insert(value: T, index: number) {
    const rawIndex = index < 0 ? 0 : index;

    if (rawIndex === 0) {
      return this.prepend(value);
    } else {
      const newNode = new LinkedListNode(value);

      let current = this.head;
      let count = 1;
      while (current) {
        if (count === rawIndex) {
          break;
        }
        current = current.next;
        count += 1;
      }
      if (current) {
        newNode.next = current.next;
        current.next = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  delete(value: T): LinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail && this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  find(value?: T, callback?: (value: T) => boolean): LinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next as LinkedListNode<T>;
    }
    return null;
  }

  deleteTail() {
    const deletedTail = this.tail;

    if (!this.head) {
      return null;
    }
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.next === null) {
          currentNode.next = null;
          this.tail = currentNode;
        } else {
          currentNode = currentNode.next;
        }
      }
      return deletedTail;
    }
  }

  deleteHead() {
    const deletedHead = this.head;
    if (!this.head) {
      return null;
    }
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }
  fromArray(values: T[]) {
    values.forEach((value) => this.append(value));

    return this;
  }

  toString(callback?: (value: T) => string): string {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let next;
    let prev = null;
    while (currentNode) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }
}
