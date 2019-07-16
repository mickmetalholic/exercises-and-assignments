/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  let res = 0;
  grid.forEach((row, i) => {
    row.forEach((col, j) => {
      if (grid[i][j] === 1) {
        res += 4;
        if (i + 1 < grid.length && grid[i + 1][j] === 1) res -= 1;
        if (i - 1 >= 0 && grid[i - 1][j] === 1) res -= 1;
        if (j + 1 < grid[0].length && grid[i][j + 1] === 1) res -= 1;
        if (j - 1 >= 0 && grid[i][j - 1] === 1) res -= 1;
      }
    });
  });
  return res;
}
