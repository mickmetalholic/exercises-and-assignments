/*
 * @lc app=leetcode id=650 lang=javascript
 *
 * [650] 2 Keys Keyboard
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function minSteps(n) {
  let res = 0, step = 2;
  while (n > 1) {
    while (n % step === 0) {
      n = Math.floor(n / step);
      res += step;
    }
    step++;
  }
  return res;
}
// @lc code=end
