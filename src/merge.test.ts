import { merge } from './merge';

function isAscending(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

describe('merge - basic cases', () => {
  test('disjoint ranges', () => {
    const c1 = [1, 4, 7];
    const c2 = [9, 6, 3];
    const c3 = [2, 5, 8];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('overlapping ranges', () => {
    const c1 = [1, 3, 5];
    const c2 = [6, 4, 2];
    const c3 = [1, 3, 5];
    expect(merge(c1, c2, c3)).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6]);
  });

  test('result is always ascending', () => {
    const c1 = [0, 10, 20, 30];
    const c2 = [25, 15, 5];
    const c3 = [2, 8, 18, 28];
    const result = merge(c1, c2, c3);
    expect(isAscending(result)).toBe(true);
  });
});

describe('merge - edge cases', () => {
  test('all arrays empty', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test('only collection_1 has elements', () => {
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
  });

  test('only collection_2 has elements', () => {
    expect(merge([], [5, 3, 1], [])).toEqual([1, 3, 5]);
  });

  test('only collection_3 has elements', () => {
    expect(merge([], [], [2, 4, 6])).toEqual([2, 4, 6]);
  });

  test('two arrays empty, one has a single element', () => {
    expect(merge([42], [], [])).toEqual([42]);
    expect(merge([], [42], [])).toEqual([42]);
    expect(merge([], [], [42])).toEqual([42]);
  });

  test('single-element arrays', () => {
    expect(merge([1], [3], [2])).toEqual([1, 2, 3]);
  });

  test('all elements equal', () => {
    expect(merge([5, 5], [5, 5], [5, 5])).toEqual([5, 5, 5, 5, 5, 5]);
  });

  test('arrays of unequal lengths', () => {
    const c1 = [1];
    const c2 = [10, 8, 6, 4, 2];
    const c3 = [3, 7];
    const result = merge(c1, c2, c3);
    expect(result).toHaveLength(c1.length + c2.length + c3.length);
    expect(isAscending(result)).toBe(true);
    expect(result).toEqual([1, 2, 3, 4, 6, 7, 8, 10]);
  });

  test('negative numbers', () => {
    const c1 = [-10, -5, 0];
    const c2 = [8, 3, -3];
    const c3 = [-7, -1, 6];
    const result = merge(c1, c2, c3);
    expect(isAscending(result)).toBe(true);
    expect(result).toEqual([-10, -7, -5, -3, -1, 0, 3, 6, 8]);
  });

  test('mixed positive and negative with duplicates', () => {
    const c1 = [-2, 0, 2];
    const c2 = [2, 0, -2];
    const c3 = [-2, 0, 2];
    expect(merge(c1, c2, c3)).toEqual([-2, -2, -2, 0, 0, 0, 2, 2, 2]);
  });
});

describe('merge - large input', () => {
  test('1 000 elements per array produce correct ascending output', () => {
    const size = 1_000;
    const c1 = Array.from({ length: size }, (_, i) => i * 3);
    const c2 = Array.from({ length: size }, (_, i) => (size - 1 - i) * 3 + 2);
    const c3 = Array.from({ length: size }, (_, i) => i * 3 + 1);

    const result = merge(c1, c2, c3);
    expect(result).toHaveLength(3 * size);
    expect(isAscending(result)).toBe(true);
    expect(result[0]).toBe(0);
    expect(result[result.length - 1]).toBe((size - 1) * 3 + 2);
  });
});
