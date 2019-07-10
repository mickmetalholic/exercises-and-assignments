/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
  let res = '';
  const remains = Array.from({ length: n }, (_, i) => i + 1);
  let index = k - 1;
  for (let i = 1; i < n; i++) {
    // the permuation count of current remain numbers
    const count = fact(n - i);
    const num = Math.floor(index / count);
    res += remains.splice(num, 1);
    index %= count;
  }
  res += remains[index];
  return res;

  function fact(x) {
    return x === 1 ? 1 : x * fact(x - 1);
  }
}
