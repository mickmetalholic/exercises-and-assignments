/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
function uniquePaths (m: number, n: number): number {
  const paths = Array.from({ length: m }, () => Array.from<number>({ length: n }))

  for (let i = 0; i < m; i++) {
    paths[i][0] = 1
  }

  for (let i = 0; i < n; i++) {
    paths[0][i] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      paths[i][j] = paths[i][j - 1] + paths[i - 1][j]
    }
  }

  return paths[m - 1][n - 1]
}
// @lc code=end
