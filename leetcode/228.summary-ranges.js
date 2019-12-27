/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
  if (nums.length === 0) return [];

  let min = max = nums[0];
  const res = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - max === 1) {
      max = nums[i];
    } else {
      res.push(min === max ? `${min}` : `${min}->${max}`);
      min = max = nums[i];
    }
  }
  res.push(min === max ? `${min}` : `${min}->${max}`);
  return res;
}
// @lc code=end
