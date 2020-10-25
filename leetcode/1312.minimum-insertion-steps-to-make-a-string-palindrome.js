/*
 * @lc app=leetcode id=1312 lang=javascript
 *
 * [1312] Minimum Insertion Steps to Make a String Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function minInsertions(s) {
  const dp = Array.from({ length: s.length }, _ => new Array(s.length));

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = 0;
      } else if (i + 1 === j) {
        dp[i][j] = s[i] === s[j] ? 0 : 1;
      } else if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i + 1][j - 1] + 2,
          dp[i + 1][j] + 1,
          dp[i][j - 1] + 1
        );
      }
    }
  }

  return dp[0][s.length - 1];
}
// @lc code=end
