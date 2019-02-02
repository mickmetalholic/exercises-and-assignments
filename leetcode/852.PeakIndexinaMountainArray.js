/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = A => A.reduce((res, e, i, arr) => {
  if (arr[i - 1] < e && e > arr[i + 1]) {
    return i;
  }
  return res;
});
