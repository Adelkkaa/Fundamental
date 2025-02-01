import { describe, expect, it } from "vitest";
import { Comparator } from "../Comparator";

describe('Comparator', () => {
    it('should be defined', () => {
        expect(Comparator).toBeDefined();
    });

    it('defaultCompareFn', () => {
        expect(Comparator.defaultCompareFn(1, 2)).toBe(-1);
        expect(Comparator.defaultCompareFn(2, 1)).toBe(1);
        expect(Comparator.defaultCompareFn(1, 1)).toBe(0);
    });

    it('equal', () => {
        const compareFn = new Comparator()
        expect(compareFn.equal(1, 1)).toBe(true);
        expect(compareFn.equal(1, 2)).toBe(false);
    });

    it('lessThan', () => {
        const compareFn = new Comparator()
        expect(compareFn.lessThan(1, 2)).toBe(true);
        expect(compareFn.lessThan(2, 1)).toBe(false);
    });

    it('lessThanOrEqual', () => {
        const compareFn = new Comparator()
        expect(compareFn.lessThanOrEqual(1, 1)).toBe(true);
        expect(compareFn.lessThanOrEqual(1, 2)).toBe(true);
        expect(compareFn.lessThanOrEqual(2, 1)).toBe(false);
    });

    it('greaterThan', () => {
        const compareFn = new Comparator()
        expect(compareFn.greaterThan(1, 2)).toBe(false);
        expect(compareFn.greaterThan(2, 1)).toBe(true);
    });

    it('greaterThanOrEqual', () => {
        const compareFn = new Comparator()
        expect(compareFn.greaterThanOrEqual(1, 1)).toBe(true);
        expect(compareFn.greaterThanOrEqual(1, 2)).toBe(false);
        expect(compareFn.greaterThanOrEqual(2, 1)).toBe(true);
    });

    it('reverse', () => {
        const compareFn = new Comparator()
        compareFn.reverse()
        expect(compareFn.lessThan(1, 2)).toBe(false);
        expect(compareFn.lessThan(2, 1)).toBe(true);
    });
});