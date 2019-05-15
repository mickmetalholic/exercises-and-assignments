/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  const res = [];
  res[0] = 0;
  res[1] = 1;
  for (let i = 2; i <= n; i++) {
    const root = Math.sqrt(i);
    const maxRoot = Math.floor(root);
    if (root === maxRoot) {
      res[i] = 1;
    } else {
      res[i] = Infinity;
      for (let j = 1; j <= maxRoot; j++) {
        res[i] = Math.min(res[i - j * j] + 1, res[i]);
      }
    }
  }
  return res[n];
}
