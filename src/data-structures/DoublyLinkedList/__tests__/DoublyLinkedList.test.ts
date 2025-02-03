import { describe, expect, it } from "vitest";
import { DoublyLinkedList } from "../DoublyLinkedList";

describe("DoublyLinkedList", () => {
    it("Empty DoublyLinkedList", () => {
        const list = new DoublyLinkedList<number>();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    it("Prepend to DoublyLinkedList", () => {
        const list = new DoublyLinkedList<number>();
        list.prepend(1);
        expect(list.head?.value).toBe(1);
        expect(list.tail?.value).toBe(1);

        list.prepend(30);
        expect(list.head?.value).toBe(30);
        expect(list.tail?.value).toBe(1);
    });

    it("Append to DoublyLinkedList", () => {
        const list = new DoublyLinkedList<number>();
        list.append(1);
        expect(list.head?.value).toBe(1);
        expect(list.tail?.value).toBe(1);

        list.append(30);
        expect(list.head?.value).toBe(1);
        expect(list.tail?.value).toBe(30);
    });

    it('Delete node by value from linked list', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.append(1);
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        expect(linkedList.head?.toString()).toBe('1');
        expect(linkedList.tail?.toString()).toBe('5');

        linkedList.delete(1);
        expect(linkedList.head?.toString()).toBe('2');
        expect(linkedList.tail?.toString()).toBe('5');

        linkedList.delete(3);
        expect(linkedList.head?.toString()).toBe('2');
        expect(linkedList.tail?.toString()).toBe('5');

        linkedList.delete(5);
        expect(linkedList.head?.toString()).toBe('2');
        expect(linkedList.tail?.toString()).toBe('4');
    })

    it('Find node by value from linked list', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.append(1);
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        expect(linkedList.head?.toString()).toBe('1');
        expect(linkedList.tail?.toString()).toBe('5');

        const foundNode = linkedList.find(3);
        expect(foundNode?.toString()).toBe('3');
    })

    it('Delete tail from linked list', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.append(1);
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        expect(linkedList.head?.toString()).toBe('1');
        expect(linkedList.tail?.toString()).toBe('5');

        linkedList.deleteTail();
        expect(linkedList.head?.toString()).toBe('1');
        expect(linkedList.tail?.toString()).toBe('4');
    })

    it('Delete head from linked list', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        expect(linkedList.head?.toString()).toBe('1');
        expect(linkedList.tail?.toString()).toBe('5');

        linkedList.deleteHead();
        expect(linkedList.head?.toString()).toBe('2');
        expect(linkedList.tail?.toString()).toBe('5');
    })

    it('toArray', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);
        
        const array = linkedList.toArray()
        expect(array.length).toBe(7);

    })

    it('fromArray', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.fromArray([1, 2, 3, 3, 3, 4, 5]);

        expect(linkedList.head?.toString()).toBe('1');
        expect(linkedList.tail?.toString()).toBe('5');
    })

    it('toString', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        expect(linkedList.toString()).toBe('1,2,3,3,3,4,5');
    })

    it('reverse', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        expect(linkedList.toString()).toBe('1,2,3,3,3,4,5');
        linkedList.reverse();
        expect(linkedList.toString()).toBe('5,4,3,3,3,2,1');
    })
});