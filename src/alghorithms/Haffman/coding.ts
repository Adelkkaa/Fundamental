import type { HuffmanNode } from "./types";

// Построение таблицы уникальных символов
export function buildFrequencyTable(data: string): Map<string, number> {
    const freq = new Map<string, number>();
    for (const char of data) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    return freq;
}

// Построение дерева Хаффмана
export function buildHuffmanTree(freqMap: Map<string, number>): HuffmanNode {
    const nodes: HuffmanNode[] = [];
    freqMap.forEach((freq, char) => nodes.push({ freq, char }));
    while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq);
        const left = nodes.shift()!;
        const right = nodes.shift()!;
        nodes.push({ freq: left.freq + right.freq, left, right });
    }
    return nodes[0];
}

// Построение таблицы кодов на основании дерева Хаффмана
export function buildCodeTable(root: HuffmanNode): Map<string, string> {
    const codeTable = new Map<string, string>();
    function traverse(node: HuffmanNode, code: string) {
        if (node.char !== undefined) {
            codeTable.set(node.char, code);
        } else {
            node.left && traverse(node.left, code + '0');
            node.right && traverse(node.right, code + '1');
        }
    }
    traverse(root, '');
    return codeTable;
}

// Кодирование строки при помощи таблицы кодов
export function encodeData(data: string, codeTable: Map<string, string>): string {
    return Array.from(data).map(char => codeTable.get(char)).join('');
}

// Функция кодирования
export function huffmanEncode(data: string): { encodedBits: string; codeTable: Map<string, string>; tree: HuffmanNode; originalLength: number, freqMap: Map<string, number> } {
    if (data === '') throw new Error('Data is empty');
    const freqMap = buildFrequencyTable(data);
    const tree = buildHuffmanTree(freqMap);
    const codeTable = buildCodeTable(tree);
    const encodedBits = encodeData(data, codeTable);
    return {  encodedBits, codeTable, tree, originalLength: data.length, freqMap };
}