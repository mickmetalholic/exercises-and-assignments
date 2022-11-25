/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
function jump(nums: number[]): number {
  const minStep: number[] = new Array(nums.length).fill(-1)

  minStep[nums.length - 1] = 0

  for (let i = nums.length - 2; i >= 0; i--) {
    const step = nums[i]
    const nextPositions = minStep.slice(i + 1, i + step + 1).filter(e => e >= 0)
    if (nextPositions.length > 0) {
      minStep[i] = Math.min(...nextPositions) + 1
    }
  }

  return minStep[0]
}
// @lc code=end
