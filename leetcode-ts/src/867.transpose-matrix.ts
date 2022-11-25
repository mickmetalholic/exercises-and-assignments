/*
 * @lc app=leetcode id=867 lang=typescript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
function transpose (matrix: number[][]): number[][] {
  const res = Array.from<number>({ length: matrix[0].length })
    .map(_ => Array.from<number>({ length: matrix.length }))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      res[j][i] = matrix[i][j]
    }
  }
  return res
}
// @lc code=end
