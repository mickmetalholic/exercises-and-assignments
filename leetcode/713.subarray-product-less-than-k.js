/*
 * @lc app=leetcode id=713 lang=javascript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {
  let l = 0, product = 1, res = 0;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
    while (product >= k && l <= i) {
      product /= nums[l];
      l++;
    }
    // the number of subarrays ends with nums[i]
    res += (i - l + 1);
  }
  return res;
}
// @lc code=end
