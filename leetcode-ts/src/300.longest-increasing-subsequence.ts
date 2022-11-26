/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
function lengthOfLIS (nums: number[]): number {
  const lengths = [1]
  let longest = 1

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    let length = 1
    for (let j = 0; j < i; j++) {
      if (num > nums[j]) {
        length = Math.max(length, lengths[j] + 1)
      }
    }
    lengths[i] = length
    longest = Math.max(longest, length)
  }

  return longest
}
// @lc code=end
