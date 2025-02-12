export function compress(input: string): number[] {
    const dictionary = new Map<string, number>();
    for (let i = 0; i < 256; i++) {
        dictionary.set(String.fromCharCode(i), i);
    }

    let current = '';
    const result: number[] = [];

    for (const char of input) {
        const next = current + char;
        if (dictionary.has(next)) {
            current = next;
        } else {
            result.push(dictionary.get(current)!);
            dictionary.set(next, dictionary.size);
            current = char;
        }
    }

    if (current !== '') {
        result.push(dictionary.get(current)!);
    }

    return result;
}

export function decompress(compressed: number[]): string {
    if (compressed.length === 0) return '';

    const dictionary: string[] = [];
    for (let i = 0; i < 256; i++) {
        dictionary[i] = String.fromCharCode(i);
    }

    let current = dictionary[compressed[0]];
    let result = current;

    for (let i = 1; i < compressed.length; i++) {
        const code = compressed[i];
        let entry: string;

        if (dictionary[code] !== undefined) {
            entry = dictionary[code];
        } else if (code === dictionary.length) {
            entry = current + current[0];
        } else {
            throw new Error(`Invalid compression code: ${code}`);
        }

        result += entry;
        dictionary.push(current + entry[0]);
        current = entry;
    }

    return result;
}