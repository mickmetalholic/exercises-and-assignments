/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let res = 0;
  while (n > 0) {
    res += n % 2;
    n = Math.floor(n / 2);
  }
  return res;
}
// @lc code=end
