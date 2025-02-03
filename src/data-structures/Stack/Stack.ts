import { LinkedList } from "../LinkedList/LinkedList";

export class Stack<T> {
  private linkedList: LinkedList<T>;

  constructor() {
    this.linkedList = new LinkedList<T>();
  }

  isEmpty(): boolean {
    return !this.linkedList.head;
  }

  peek(): T | null {
    return this.linkedList.head?.value || null;
  }

  push(value: T): void {
    this.linkedList.prepend(value);
  }

  pop(): T | null {
    return this.linkedList.deleteHead()?.value || null;
  }

  toArray(): T[] {
    return this.linkedList.toArray().map((node) => node.value);
  }

  toString(callback?: (value: T) => string): string {
    return this.linkedList.toString(callback);
  }
}
