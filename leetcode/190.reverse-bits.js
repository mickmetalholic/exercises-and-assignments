/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  let base = Math.pow(2, 31), res = 0, m = n;
  while (m > 0) {
    res += base * (m % 2);
    base /= 2;
    m = Math.floor(m / 2);
  }
  return res;
}
