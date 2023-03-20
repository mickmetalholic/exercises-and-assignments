/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum (nums: number[], target: number): number[] {
  const indices: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (typeof indices[target - num] === 'number') {
      return [i, indices[target - num]]
    }
    indices[num] = i
  }
  return [-1, -1]
}
// @lc code=end
