import type { HuffmanNode } from "./types";

// Декодирование строки при помощи дерева Хаффмана
export function huffmanDecode(bitString: string, tree: HuffmanNode, originalLength: number): string {
    if (tree.char !== undefined && !tree.left && !tree.right) {
        return tree.char.repeat(originalLength);
    }
    console.log('bitString', bitString)
    let decoded = '';
    let currentNode = tree;
    for (const bit of bitString) {
        currentNode = bit === '0' ? currentNode.left! : currentNode.right!;
        if (currentNode.char !== undefined) {
            decoded += currentNode.char;
            currentNode = tree;
        }
    }
    return decoded;
}