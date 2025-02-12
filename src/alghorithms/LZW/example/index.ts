import { compress, decompress } from '../lzw';
import { measureTime, calculateCompressionRatio } from '../metrics';

function runExample(inputData: string) {
    console.log('Running LZW example with input:', inputData);
    console.log('Original length:', inputData.length, 'characters');

    // Compression
    const compressResult = measureTime(() => compress(inputData));
    const compressed = compressResult.result;
    console.log(`Compression time: ${compressResult.time.toFixed(2)} ms`);
    console.log('Compressed codes:', compressed);
    console.log('Compressed length:', compressed.length, 'codes');

    // Compression ratio
    const ratio = calculateCompressionRatio(inputData, compressed);
    console.log(`Compression ratio: ${ratio.toFixed(2)}`);

    // Decompression
    const decompressResult = measureTime(() => decompress(compressed));
    console.log(`Decompression time: ${decompressResult.time.toFixed(2)} ms`);

    // Validation
    const isCorrect = decompressResult.result === inputData;
    console.log('Decompression correct:', isCorrect);
    if (!isCorrect) {
        console.error('Error: Original and decompressed data mismatch!');
    }
    console.log('----------------------------------------');
}

// Example 1: Simple repetitive pattern
runExample('TOBEORNOTTOBEORTOBEORNOT');

// Example 2: Single character repetition
runExample('AAAAAAAAAAAAAAA');

// Example 3: Empty string
runExample('');

// Example 4: Complex pattern
runExample('ABABABABABABABAB');