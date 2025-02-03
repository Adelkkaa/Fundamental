import { describe, expect, it } from "vitest";
import { Stack } from "../Stack";

describe("Stack", () => {
    it("Empty Stack", () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    })

    it("Peek", () => {
        const stack = new Stack();
        stack.peek();
        expect(stack.peek()).toBeNull();
    })

    it("Push", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
    })

    it("Pop", () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.pop()).toBe(1);
        expect(stack.isEmpty()).toBe(true); 
    })

    it("ToArray", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.toArray()).toEqual([2, 1]);
    })

    it("ToString", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.toString()).toBe("2,1");
    })
});