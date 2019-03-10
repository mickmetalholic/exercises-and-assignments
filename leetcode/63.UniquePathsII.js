/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const rowCount = obstacleGrid.length;
  const colCount = obstacleGrid[0].length;

  const dp = [];
  for (let i = 0; i < rowCount; i++) {
    dp[i] = [];
    for (let j = 0; j < colCount; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else if (i === 0 && j === 0) {
        dp[i][j] = obstacleGrid[0][0] === 1 ? 0 : 1;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[rowCount - 1][colCount - 1];
}
