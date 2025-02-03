import { describe, expect, it } from "vitest";
import { Queque } from "../Queque";

describe("Queque", () => {
    it("Empty Queque", () => {
        const queque = new Queque();
        expect(queque.isEmpty()).toBe(true);
    });

    it("Peek", () => {
        const queque = new Queque();
        queque.peek();
        expect(queque.peek()).toBeNull();
    });

    it("Enqueue", () => {
        const queque = new Queque();
        queque.enqueue(1);
        queque.enqueue(2);
        expect(queque.peek()).toBe(1);
    });

    it("Dequeue", () => {
        const queque = new Queque();
        queque.enqueue(1);
        expect(queque.dequeue()).toBe(1);
        expect(queque.isEmpty()).toBe(true);
    });

    it("ToString", () => {
        const queque = new Queque();
        queque.enqueue(1);
        queque.enqueue(2);
        expect(queque.toString()).toBe("1,2");
    });
});