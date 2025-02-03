import { describe, expect, it } from "vitest";
import { DoublyLinkedListNode } from "../DoublyLinkedListNode";

describe('DoublyLinkedListNode', () => {
    it('Create node', () => {
        const node = new DoublyLinkedListNode(5);
        expect(node.value).toBe(5);
        expect(node.next).toBeNull();
        expect(node.prev).toBeNull();
    });

    it('Create node with next', () => {
        const node1 = new DoublyLinkedListNode(5);
        expect(node1.value).toBe(5);
        expect(node1.next).toBeNull();
        expect(node1.prev).toBeNull();

        const node2 = new DoublyLinkedListNode(10, node1);
        expect(node2.value).toBe(10);
        expect(node2.next).toBeDefined();
        expect(node2.prev).toBeNull();

    })

    it ('Create node with object', () => {
        const node1 = new DoublyLinkedListNode({ id: 5 });
        expect(node1.value).toEqual({ id: 5 });
        expect(node1.next).toBeNull();
        expect(node1.prev).toBeNull();
    })

    it('Method toString', () => {
        const node1 = new DoublyLinkedListNode(5);
        expect(node1.toString()).toBe('5');
    })

    it('Method toString with callback', () => {
        const node1 = new DoublyLinkedListNode(5);
        expect(node1.toString((val) => `Number: ${val}`)).toBe("Number: 5");
    })
})