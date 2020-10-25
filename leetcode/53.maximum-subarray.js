/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let prev = nums[0];
  let res = prev;
  for (let i = 1; i < nums.length; i++) {
    let cur = Math.max(prev + nums[i], nums[i]);
    res = Math.max(res, cur);
    prev = cur;
  }

  return res;
}
// @lc code=end
