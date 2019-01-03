/**
 * @param {number[]} row
 * @return {number}
 */
const minSwapsCouples = (row) => {
  const findTheOther = num => (num % 2 ? num - 1 : num + 1);

  const hash = row.reduce((res, e, i) => {
    res[e] = i;
    return res;
  }, {});

  let swapCount = 0;
  row.forEach((num, i, arr) => {
    if (i % 2) {
      const cp1 = arr[i - 1];
      const cp2 = findTheOther(cp1);
      if (cp2 !== num) {
        const cp2Place = hash[cp2];
        [arr[i], arr[cp2Place]] = [arr[cp2Place], arr[i]];
        hash[cp2] = i;
        hash[num] = cp2Place;
        swapCount++;
      }
    }
  });

  return swapCount;
};
