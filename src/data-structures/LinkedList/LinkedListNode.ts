export class LinkedListNode<T> {
    next: LinkedListNode<T> | null;
    value: T;
    constructor(value: T, next: LinkedListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback?: (value: T) => string): string {
        return callback ? callback(this.value) : String(this.value);
    }
}
