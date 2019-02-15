/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const sorted = nums.sort((a, b) => a - b);

  const res = [];
  let permutation = sorted.slice();
  while (permutation) {
    res.push(permutation);
    permutation = _next(permutation);
  }
  return res;

  function _next(arr) {
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
      i--;
    }

    if (i < 0) return null;

    // arr[i] < arr[i + 1]

    // arr[j] > arr[i] and arr[j + 1] <= arr[i]
    let j = i;
    while (j < arr.length - 1 && arr[j + 1] > arr[i]) {
      j++;
    }

    const nextArr = arr.slice();
    [nextArr[i], nextArr[j]] = [nextArr[j], nextArr[i]];
    return nextArr.slice(0, i + 1).concat(nextArr.slice(i + 1).reverse());
  }
}
