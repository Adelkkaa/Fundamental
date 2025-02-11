import { describe, expect, it } from "vitest";
import { huffmanEncode } from "../Haffman/coding";
import { huffmanDecode } from "../Haffman/decoding";

describe("Haffman", () => {
    it("Haffman", () => {
        expect(true).toBe(true);
    });

    it("Encoding", () => {
        const { encodedBits, codeTable, tree, originalLength, freqMap } =
          huffmanEncode('hello');
        expect(originalLength).toBe(5);
        expect(codeTable.size).toBe(4);
        expect(tree).toBeDefined();
        expect(freqMap.size).toBe(4);
        expect(encodedBits).toBe('0001111110');
    });

    it("Decoding", () => {
        const { encodedBits, codeTable, tree, originalLength, freqMap } =
          huffmanEncode('hello');
        const decoded = huffmanDecode(encodedBits, tree, originalLength);
        expect(decoded).toBe('hello');
    });
})