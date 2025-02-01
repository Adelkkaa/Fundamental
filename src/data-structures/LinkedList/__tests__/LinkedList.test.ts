import { describe, expect, it } from "vitest";
import { LinkedList } from "../LinkedList";

describe("LinkedList", () => {
  it("Empty LinkedList", () => {
    const list = new LinkedList<number>();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it("Prepend to LinkedList", () => {
    const list = new LinkedList<number>();
    list.prepend(1);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);

    list.prepend(30);
    expect(list.head?.value).toBe(30);
    expect(list.tail?.value).toBe(1);
  });

  it("Append to LinkedList", () => {
    const list = new LinkedList<number>();
    list.append(1);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);

    list.append(30);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(30);
  });

  it("Insert to LinkedList", () => {
    const linkedList = new LinkedList();

    linkedList.insert(4, 3);
    expect(linkedList.head?.toString()).toBe("4");
    expect(linkedList.tail?.toString()).toBe("4");

    linkedList.insert(3, 2);
    expect(linkedList.head?.toString()).toBe("4");
    expect(linkedList.tail?.toString()).toBe("3");

    linkedList.insert(2, 1);
    expect(linkedList.head?.toString()).toBe("4");
    expect(linkedList.tail?.toString()).toBe("3");

    linkedList.insert(1, -7);
    expect(linkedList.head?.toString()).toBe("1");
    expect(linkedList.tail?.toString()).toBe("3");

    linkedList.insert(10, 9);
    expect(linkedList.head?.toString()).toBe("1");
    expect(linkedList.tail?.toString()).toBe("10");

    expect(linkedList.toString()).toBe("1,4,2,3,10");
  });

  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(5)).toBeNull();

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

    const deletedNode = linkedList.delete(3);
    expect(deletedNode?.value).toBe(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('2,4,5');

    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('5');

    linkedList.delete(5);
    expect(linkedList.toString()).toBe('2,4');

    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('4');

    linkedList.delete(4);
    expect(linkedList.toString()).toBe('2');

    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('2');

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  it('should find node by value from linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.find()).toBeNull();

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
    expect(foundNode?.value).toBe(3);
    expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');

    const notFoundNode = linkedList.find(6);
    expect(notFoundNode).toBeNull();
    expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  });

  it('should delete tail from linked list', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('5');

    const deleted = linkedList.deleteTail();
    expect(deleted?.toString()).toBe('5');
    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('4');
  });

  it('should delete head from linked list', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);    

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('5');

    const deleted = linkedList.deleteHead();
    expect(deleted?.toString()).toBe('1');
    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('5');
  });

  it('should convert array to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.fromArray([1, 2, 3, 4, 5]);

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('5');  
    expect(linkedList.toString()).toBe('1,2,3,4,5');
  });

  it('should reverse linked list', () => {
    const linkedList = new LinkedList();

    linkedList.fromArray([1, 2, 3, 4, 5]);

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('5');  
    expect(linkedList.toString()).toBe('1,2,3,4,5');
    expect(linkedList.reverse().toString()).toBe('5,4,3,2,1');
  });
});
