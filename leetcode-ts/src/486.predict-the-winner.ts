/*
 * @lc app=leetcode id=486 lang=typescript
 *
 * [486] Predict the Winner
 */

// @lc code=start
function PredictTheWinner (nums: number[]): boolean {
  if (nums.length % 2 === 0) {
    return true
  }

  const dp = Array.from({ length: nums.length }, () => Array.from<number>({ length: nums.length }))

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i; j < nums.length; j++) {
      if (i === j) {
        dp[i][j] = nums[i]
      } else if (i === nums.length - 1) {
        dp[i][j] = nums[i] - dp[i + 1][j]
      } else if (j === 0) {
        dp[i][j] = nums[j] - dp[i][j - 1]
      } else {
        dp[i][j] = Math.max(
          nums[i] - dp[i + 1][j],
          nums[j] - dp[i][j - 1]
        )
      }
    }
  }

  return dp[0][nums.length - 1] >= 0
}
// @lc code=end
