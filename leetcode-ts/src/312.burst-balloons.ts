/*
 * @lc app=leetcode id=312 lang=typescript
 *
 * [312] Burst Balloons
 */

// @lc code=start
function maxCoins (nums: number[]): number {
  const newNums = [1, ...nums, 1]
  const dp = Array.from(
    { length: newNums.length },
    () => Array.from<number>({ length: newNums.length }).fill(0)
  )

  for (let i = newNums.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < newNums.length; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + newNums[i] * newNums[k] * newNums[j]
        )
      }
    }
  }

  return dp[0][nums.length + 1]
}
// @lc code=end
