/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 */
/**
 * @param {string} s
 * @return {number}
 */
function longestPalindromeSubseq(s) {
  let res = 0;
  const lengths = Array.from({ length: s.length }, _ => new Array(s.length));
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        lengths[i][j] = 1;
      } else if (i + 1 === j) {
        lengths[i][j] = s[i] === s[j] ? 2 : 1;
      } else {
        if (s[i] === s[j]) {
          lengths[i][j] = lengths[i + 1][j - 1] + 2;
        } else {
          lengths[i][j] = Math.max(lengths[i + 1][j], lengths[i][j - 1]);
        }
      }
      res = Math.max(res, lengths[i][j]);
    }
  }
  return res;
}
