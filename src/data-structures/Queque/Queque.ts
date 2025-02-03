import { LinkedList } from "../LinkedList/LinkedList";

export class Queque<T> {
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

    enqueue(value: T): void {
        this.linkedList.append(value);
    }

    dequeue(): T | null {
        return this.linkedList.deleteHead()?.value || null;
    }

    toString(callback?: (value: T) => string): string {
        return this.linkedList.toString(callback);
    }
}