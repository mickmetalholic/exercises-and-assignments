/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  const res = [];
  let nextPermutation = nums.slice().sort((a, b) => a - b);
  while (nextPermutation) {
    res.push(nextPermutation.slice());
    nextPermutation = _getNextPermutation(nextPermutation);
  }
  return res;

  function _getNextPermutation(arr) {
    // find the last one that larger than next
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
      i--;
    }
    // the array is decreasing
    if (i < 0) return null;

    // find the smallest one that larger than arr[i]
    let j = i;
    while (arr[i] < arr[j + 1]) {
      j++;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];

    return [...arr.slice(0, i + 1), ...arr.slice(i + 1).reverse()]
  }
}
