/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
function isPowerOfFour(num) {
  if (num <= 0) return false;

  const n = Math.log(num) / Math.log(4);
  return n === Math.floor(n);
}
// @lc code=end
