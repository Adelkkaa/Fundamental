
export class Comparator<T> {
    compareFn: (a: T, b: T) => number

    constructor(compareFn?: (a: T, b: T) => number) {
        this.compareFn = compareFn || Comparator.defaultCompareFn;
    }

   static defaultCompareFn<T>(a: T, b: T): number {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }

    equal(a: T, b: T): boolean {
        return this.compareFn(a, b) === 0;
    }

    greaterThan(a: T, b: T): boolean {
        return this.compareFn(a, b) === 1;
    }

    lessThan(a: T, b: T): boolean {    
        return this.compareFn(a, b) === -1;
    }


    lessThanOrEqual(a: T, b: T): boolean {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    greaterThanOrEqual(a: T, b: T): boolean {
        return this.greaterThan(a, b) || this.equal(a, b)
    }

    reverse() {
        const compareOriginal = this.compareFn;
        this.compareFn = (a, b) => compareOriginal(b, a);
      }
}