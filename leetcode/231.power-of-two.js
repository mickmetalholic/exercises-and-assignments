/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  if (n <= 0) return false;
  let m = 1;
  while ((m & n) === 0) {
    m = m << 1;
  }
  return m === n;
}
