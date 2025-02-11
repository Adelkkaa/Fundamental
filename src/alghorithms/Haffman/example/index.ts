import { calculateAverageCodeLength, calculateEntropy } from "../characteristic";
import { huffmanEncode } from "../coding";
import { huffmanDecode } from "../decoding";

const HUFFMAN_STRING = 'world'

const startEncode = performance.now();
const { encodedBits, codeTable, tree, originalLength, freqMap } =
  huffmanEncode(HUFFMAN_STRING);
const encodeTime = performance.now() - startEncode;

const startDecode = performance.now();
const decoded = huffmanDecode(encodedBits, tree, originalLength);
const decodeTime = performance.now() - startDecode;

const avgLength = calculateAverageCodeLength({
  codeTable,
  freqMap,
  totalChars: HUFFMAN_STRING.length,
});
const entropy = calculateEntropy({ freqMap, totalChars: HUFFMAN_STRING.length });
const redundancy = avgLength - entropy;


console.log(`Encode time: ${encodeTime.toFixed(2)}ms`);
console.log(`Decode time: ${decodeTime.toFixed(2)}ms`);
console.log(`Average code length: ${avgLength.toFixed(2)}`);
console.log(`Entropy: ${entropy.toFixed(2)}`);
console.log(`Redundancy: ${redundancy.toFixed(2)}`);
console.log('Original:', HUFFMAN_STRING);
console.log('Encoded:', encodedBits);
console.log('Decoded:', decoded);