import { describe, expect, it } from "vitest";
import { compress, decompress } from "../lzw";

describe("LZW", () => {
  it("LZW", () => {
    expect(true).toBe(true);
  });

  it("compress", () => {
    const result = compress("hello");
    expect(result).toEqual([104, 101, 108, 108, 111]);
  });

  it("decompress", () => {
    const result = decompress([104, 101, 108, 108, 111]);
    expect(result).toBe("hello");
  });

  it("compress and decompress", () => {
    const input = "hello";
    const compressed = compress(input);
    const decompressed = decompress(compressed);
    expect(decompressed).toBe(input);
  });
});
