/*
 * @lc app=leetcode id=764 lang=javascript
 *
 * [764] Largest Plus Sign
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
function orderOfLargestPlusSign(N, mines) {
  const grid = Array.from({ length: N }, _ => new Array(N).fill(N));

  for (const [x, y] of mines) {
    grid[x][y] = 0;
  }

  for (let i = 0; i < N; i++) {
    let l = 0, r = 0, t = 0, b = 0;
    for (let j = 0; j < N; j++) {
      // left -> right
      if (grid[i][j] === 0) {
        l = 0;
      } else {
        l++;
      }
      // right -> left
      if (grid[i][N - j - 1] === 0) {
        r = 0;
      } else {
        r++;
      }
      // top -> bottom
      if (grid[j][i] === 0) {
        t = 0;
      } else {
        t++;
      }
      // bottom -> top
      if (grid[N - j - 1][i] === 0) {
        b = 0;
      } else {
        b++;
      }
      grid[i][j] = Math.min(grid[i][j], l);
      grid[i][N - j - 1] = Math.min(grid[i][N - j - 1], r);
      grid[j][i] = Math.min(grid[j][i], t);
      grid[N - j - 1][i] = Math.min(grid[N - j - 1][i], b);
    }
  }

  let res = 0;
  for (let i = 0; i < N; i++) {
    res = Math.max(res, ...grid[i]);
  }

  return res;
}
// @lc code=end
