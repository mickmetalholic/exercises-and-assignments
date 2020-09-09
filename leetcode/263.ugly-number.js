/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
function isUgly(num) {
  if (num < 1) return false;

  let n = num;
  while (n % 2 === 0) {
    n = Math.floor(n / 2);
  }
  while (n % 3 === 0) {
    n = Math.floor(n / 3);
  }
  while (n % 5 === 0) {
    n = Math.floor(n / 5);
  }
  return n === 1;
}
// @lc code=end
