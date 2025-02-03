import { describe, expect, it } from "vitest";
import { DoublyLinkedListNode } from "../DoublyLinkedListNode";

describe('DoublyLinkedListNode', () => {
    it('создаёт узел с числом', () => {
        const node = new DoublyLinkedListNode(5);
        expect(node.value).toBe(5);
        expect(node.next).toBeNull();
        expect(node.prev).toBeNull();
    });

    it('Создание нескольких узлов', () => {
        const node1 = new DoublyLinkedListNode(5);
        expect(node1.value).toBe(5);
        expect(node1.next).toBeNull();
        expect(node1.prev).toBeNull();

        const node2 = new DoublyLinkedListNode(10, node1);
        expect(node2.value).toBe(10);
        expect(node2.next).toBeDefined();
        expect(node2.prev).toBeNull();

    })

    it ('Создание узла с объектом', () => {
        const node1 = new DoublyLinkedListNode({ id: 5 });
        expect(node1.value).toEqual({ id: 5 });
        expect(node1.next).toBeNull();
        expect(node1.prev).toBeNull();
    })

    it('Метод toString без callback', () => {
        const node1 = new DoublyLinkedListNode(5);
        expect(node1.toString()).toBe('5');
    })

    it('Метод toString с callback', () => {
        const node1 = new DoublyLinkedListNode(5);
        expect(node1.toString((val) => `Number: ${val}`)).toBe("Number: 5");
    })
})