/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const dp = [];
  dp[0] = new Array(n).fill(1);

  for (let i = 1; i <= m - 1; i++) {
    dp[i] = [];
    for (let j = 0; j <= n - 1; j++) {
      dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + dp[i - 1][j];
    }
  }

  return dp[m - 1][n - 1];
}
