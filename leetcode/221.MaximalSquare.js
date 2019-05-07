/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
  if (matrix.length === 0) return 0;

  const dp = [];
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = Number(matrix[i][j]);
      } else if (matrix[i][j] === '0') {
        dp[i][j] = 0;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
      res = Math.max(res, dp[i][j]);
    }
  }

  return res*res;
}
