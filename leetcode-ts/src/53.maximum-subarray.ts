/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray (nums: number[]): number {
  let maxSum = nums[0]
  let prev = Math.max(maxSum, 0)

  for (let i = 1; i < nums.length; i++) {
    const current = prev + nums[i]
    maxSum = Math.max(current, maxSum)
    prev = Math.max(current, 0)
  }

  return maxSum
}
// @lc code=end
