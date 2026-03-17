export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = collection_2.length - 1;
  let k = 0;

  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    const v1 = i < collection_1.length ? collection_1[i] : Infinity;
    const v2 = j >= 0 ? collection_2[j] : Infinity;
    const v3 = k < collection_3.length ? collection_3[k] : Infinity;

    if (v1 <= v2 && v1 <= v3) {
      result.push(v1);
      i++;
    } else if (v2 <= v1 && v2 <= v3) {
      result.push(v2);
      j--;
    } else {
      result.push(v3);
      k++;
    }
  }

  return result;
}
