/*
 * @lc app=leetcode id=931 lang=typescript
 *
 * [931] Minimum Falling Path Sum
 */

// @lc code=start
function minFallingPathSum (matrix: number[][]): number {
  let sum = [...matrix[0]]

  for (let i = 1; i < matrix.length; i++) {
    const nextSum: number[] = []
    for (let j = 0; j < matrix.length; j++) {
      nextSum[j] = sum[j]
      if (j - 1 >= 0) {
        nextSum[j] = Math.min(nextSum[j], sum[j - 1])
      }
      if (j + 1 < matrix.length) {
        nextSum[j] = Math.min(nextSum[j], sum[j + 1])
      }
      nextSum[j] += matrix[i][j]
    }
    sum = nextSum
  }

  return Math.min(...sum)
}
// @lc code=end
