/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump (nums: number[]): boolean {
  let farthest = 0
  for (let i = 0; i < nums.length && i <= farthest; i++) {
    farthest = Math.max(farthest, i + nums[i])
  }
  return farthest >= nums.length - 1
}
// @lc code=end
