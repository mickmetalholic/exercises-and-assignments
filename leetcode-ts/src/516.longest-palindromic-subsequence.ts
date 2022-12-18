/*
 * @lc app=leetcode id=516 lang=typescript
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
function longestPalindromeSubseq (s: string): number {
  const dp = Array.from({ length: s.length }, () => Array.from<number>({ length: s.length }));

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (i + 1 === j) {
        dp[i][j] = s[i] === s[j] ? 2 : 1;
      } else {
        dp[i][j] = Math.max(
          dp[i + 1][j - 1] + (s[i] === s[j] ? 2 : 0),
          dp[i + 1][j],
          dp[i][j - 1]
        );
      }
    }
  }

  return dp[0][s.length - 1];
}
// @lc code=end
