/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function triangleNumber(nums) {
  nums.sort((a, b) => b - a);

  let results = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    const longest = nums[i];
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] > longest) {
        results += (r - l);
        l++;
      } else {
        r--;
      }
    }
  }
  return results;
}
// @lc code=end
