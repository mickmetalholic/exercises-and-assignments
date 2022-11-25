/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity (nums: number[]): number[] {
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    while (nums[i] % 2 === 0) {
      i++
    }
    while (nums[j] % 2 === 1) {
      j--
    }

    if (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  return nums
}
// @lc code=end
