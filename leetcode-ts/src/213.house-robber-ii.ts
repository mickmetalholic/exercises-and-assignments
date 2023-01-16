/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 */

// @lc code=start
function rob (nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }

  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  const dp1 = Array.from({ length: nums.length }, () => 0)
  const dp2 = Array.from({ length: nums.length }, () => 0)

  dp1[0] = nums[0]
  dp1[1] = nums[0]

  dp2[0] = 0
  dp2[1] = nums[1]

  for (let i = 2; i < nums.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], nums[i] + dp1[i - 2])
    dp2[i] = Math.max(dp2[i - 1], nums[i] + dp2[i - 2])
  }

  return Math.max(
    dp1[nums.length - 2],
    Math.max(dp2[nums.length - 2], nums[nums.length - 1] + dp2[nums.length - 3])
  )
}
// @lc code=end
