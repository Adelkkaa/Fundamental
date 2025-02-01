import { describe, expect, it } from "vitest";
import { LinkedListNode } from "../LinkedListNode";

describe("LinkedListNode", () => {
  it("создаёт узел с числом", () => {
    const node = new LinkedListNode(5);
    expect(node.value).toBe(5);
    expect(node.next).toBeNull();
  });

  it("создаёт узел со строкой", () => {
    const node = new LinkedListNode("Hello");
    expect(node.value).toBe("Hello");
  });

  it("метод toString без callback", () => {
    const node = new LinkedListNode(42);
    expect(node.toString()).toBe('42');
  });

  it("метод toString с callback", () => {
    const node = new LinkedListNode(42);
    expect(node.toString((val) => `Number: ${val}`)).toBe("Number: 42");
  });
});
