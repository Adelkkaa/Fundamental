export function measureTime<T>(fn: () => T): { result: T; time: number } {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    return { result, time: end - start };
}

export function calculateCompressionRatio(original: string, compressedCodes: number[]): number {
    if (compressedCodes.length === 0) return 0;
    const originalSize = original.length;
    const compressedSize = compressedCodes.length * 2; // Assuming 2 bytes per code
    return originalSize / compressedSize;
}