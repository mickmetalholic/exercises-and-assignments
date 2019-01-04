/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
  const cache = [0, 1, 2];
  return count(n);

  function count(x) {
    let res = cache[x];
    if (!res) {
      res = count(x - 1) + count(x - 2);
      cache[x] = res;
    }
    return res;
  }
};