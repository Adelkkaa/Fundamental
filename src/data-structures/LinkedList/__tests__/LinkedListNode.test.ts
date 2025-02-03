import { describe, expect, it } from "vitest";
import { LinkedListNode } from "../LinkedListNode";

describe("LinkedListNode", () => {
  it("Create node with number", () => {
    const node = new LinkedListNode(5);
    expect(node.value).toBe(5);
    expect(node.next).toBeNull();
  });

  it("Create node with string", () => {
    const node = new LinkedListNode("Hello");
    expect(node.value).toBe("Hello");
  });

  it("Method toString", () => {
    const node = new LinkedListNode(42);
    expect(node.toString()).toBe('42');
  });

  it("Method toString with callback", () => {
    const node = new LinkedListNode(42);
    expect(node.toString((val) => `Number: ${val}`)).toBe("Number: 42");
  });
});
