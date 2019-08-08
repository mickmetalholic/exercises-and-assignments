/*
 * @lc app=leetcode id=201 lang=javascript
 *
 * [201] Bitwise AND of Numbers Range
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function rangeBitwiseAnd(m, n) {
  let i = 0;
  while (m !== n) {
    m = m >> 1;
    n = n >> 1;
    i++;
  }
  return m << i;
}
