/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== 0 && j !== 0) {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
      } else if (i === 0 && j !== 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j];
      } else if (i !== 0 && j === 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j];
      } 
    }
  }

  return grid[m - 1][n - 1];
}
