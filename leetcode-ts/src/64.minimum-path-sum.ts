/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
function minPathSum (grid: number[][]): number {
  const sum = Array.from(
    { length: grid.length },
    (_, i) => Array.from<number>({ length: grid[i].length })
  )

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const current = grid[i][j]
      if (i === 0 && j === 0) {
        sum[i][j] = current
      } else if (i === 0) {
        sum[i][j] = sum[i][j - 1] + current
      } else if (j === 0) {
        sum[i][j] = sum[i - 1][j] + current
      } else {
        sum[i][j] = Math.min(sum[i - 1][j], sum[i][j - 1]) + current
      }
    }
  }

  return sum[grid.length - 1][grid[0].length - 1]
}
// @lc code=end
