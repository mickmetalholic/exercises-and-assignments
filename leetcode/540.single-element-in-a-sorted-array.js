/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const m = (l + r) / 2;
    if (nums[m - 1] === nums[m]) {
      if ((m - l + 1) % 2) {
        r = m;
      } else {
        l = m + 1;
      }
    } else if (nums[m] === nums[m + 1]) {
      if ((m - l) % 2) {
        r = m - 1;
      } else {
        l = m + 2;
      }
    } else {
      return nums[m];
    }
  }
}
// @lc code=end
