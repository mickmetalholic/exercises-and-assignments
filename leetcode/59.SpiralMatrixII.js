/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  const res = Array.from({ length: n }, _ => new Array(n));
  let m = 1;
  for (let level = 0; level < Math.floor((n + 1) / 2); level++) {
    const size = n - 2 * level;
    if (size === 1) {
      res[level][level] = m;
    } else {
      for (let i = level; i < n - level; i++) {
        res[level][i] = m++;
      }
      for (let i = level + 1; i < n - level - 1; i++) {
        res[i][n - level - 1] = m++;
      }
      for (let i = n - level - 1; i >= level; i--) {
        res[n - level - 1][i] = m++;
      }
      for (let i = n - level - 2; i > level; i--) {
        res[i][level] = m++;
      }
    }
  }
  return res;
}
