/*
 * @lc app=leetcode id=747 lang=typescript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
function dominantIndex (nums: number[]): number {
  if (nums.length === 0) {
    return -1
  } else if (nums.length === 1) {
    return 0
  }

  let maxIndex = nums[0] > nums[1] ? 0 : 1
  let secMaxIndex = nums[0] > nums[1] ? 1 : 0

  for (let i = 2; i < nums.length; i++) {
    const num = nums[i]
    if (num > nums[maxIndex]) {
      secMaxIndex = maxIndex
      maxIndex = i
    } else if (num > nums[secMaxIndex]) {
      secMaxIndex = i
    }
  }

  if (nums[maxIndex] >= nums[secMaxIndex] * 2) {
    return maxIndex
  } else {
    return -1
  }
}
// @lc code=end
