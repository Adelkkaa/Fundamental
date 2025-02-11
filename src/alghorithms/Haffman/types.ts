export interface HuffmanNode {
    freq: number;
    char?: string;
    left?: HuffmanNode;
    right?: HuffmanNode;
}

export interface IAverageCodeLength {
    codeTable: Map<string, string>;
    freqMap: Map<string, number>;
    totalChars: number;
}