import { Comparator } from "../../utils/Comparator";
import { DoublyLinkedListNode } from "./DoublyLinkedListNode";

export class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null;
  tail: DoublyLinkedListNode<T> | null;
  compare: Comparator<T>;
  constructor(comparatorFn?: (a: T, b: T) => number) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFn);
  }

  prepend(value: T) {
    const newNode = new DoublyLinkedListNode(value, this.head);

    if (this.head) {
      this.head.prev = newNode;
    }

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value: T) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail!.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    return this;
  }

  delete(value: T) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    let currentNode = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;
        if (deletedNode === this.head) {
          this.head = deletedNode.next;
          if (this.head) {
            this.head.prev = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.prev;
          this.tail!.next = null;
        } else {
          const prevNode = deletedNode.prev;
          const nextNode = deletedNode.next;

          prevNode!.next = nextNode;
          nextNode!.prev = prevNode;
        }
      }
      currentNode = currentNode.next as DoublyLinkedListNode<T>;
    }
    return deletedNode;
  }

  find(value?: T, callback?: (value: T) => boolean) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (value && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next as DoublyLinkedListNode<T>;
    }
  }

  deleteTail(): DoublyLinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      const deletedNode = this.head;
      this.head = null;
      this.tail = null;
      return deletedNode;
    }

    const deletedNode = this.tail;
    this.tail = this.tail!.prev;
    this.tail!.next = null;
    return deletedNode;
  }

  deleteHead(): DoublyLinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      const deletedNode = this.head;
      this.head = null;
      this.tail = null;
      return deletedNode;
    }

    const deletedNode = this.head;
    this.head = this.head!.next;
    this.head!.prev = null;
    return deletedNode;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next as DoublyLinkedListNode<T>;
    }
    return nodes;
  }

  fromArray(values: T[]) {
    values.forEach((value) => this.append(value));
    return this;
  }

  toString(callback?: (value: T) => string) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let next = null;
    let prev = null;
    while (currentNode) {
      next = currentNode.next;
      prev = currentNode.prev;
      currentNode.next = prev;
      currentNode.prev = next;
      currentNode = next;
    }
  }
}
