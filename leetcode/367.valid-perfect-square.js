/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  let l = 1, r = num + 1;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (m * m > num) {
      r = m;
    } else if (m * m < num) {
      l = m + 1;
    } else {
      return true;
    }
  }
  return false;
}
// @lc code=end
