export class DoublyLinkedListNode<T> {
    value: T;
    next: DoublyLinkedListNode<T> | null;
    prev: DoublyLinkedListNode<T> | null;

    constructor(value: T, next: DoublyLinkedListNode<T> | null = null, prev: DoublyLinkedListNode<T> | null = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

    toString(callback?: (value: T) => string): string {
        return callback ? callback(this.value) : String(this.value);
    }
}