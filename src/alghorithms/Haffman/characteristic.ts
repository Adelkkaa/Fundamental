import type { IAverageCodeLength } from "./types";

// Функция вычисления средней длины кода
export function calculateAverageCodeLength({
  codeTable,
  freqMap,
  totalChars,
}: IAverageCodeLength): number {
  let total = 0;
  codeTable.forEach((code, char) => {
    total += code.length * (freqMap.get(char) || 0);
  });
  return total / totalChars;
}

// Функция вычисления энтропии
export function calculateEntropy({
  freqMap,
  totalChars,
}: Omit<IAverageCodeLength, "codeTable">): number {
  let entropy = 0;
  freqMap.forEach((freq) => {
    const p = freq / totalChars;
    entropy += p * Math.log2(1 / p);
  });
  return entropy;
}
