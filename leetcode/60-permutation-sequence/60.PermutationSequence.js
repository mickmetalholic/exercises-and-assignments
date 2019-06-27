/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = 1; i < k; i++) {
    arr = next(arr);
  }
  return arr.join('');

  function next(arr) {
    let i = arr.length - 1;
    while (i - 1 >= 0 && arr[i - 1] > arr[i]) {
      i--;
    }
    if (i === 0) return null;

    const n = arr[i - 1];
    let j = i;
    while (Number(arr[j]) > n) {
      j++;
    }
    [arr[i - 1], arr[j - 1]] = [arr[j - 1], arr[i - 1]];
    return arr.slice(0, i).concat(arr.slice(i).reverse());
  }
}
