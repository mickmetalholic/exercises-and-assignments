/*
 * @lc app=leetcode id=1143 lang=typescript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
function longestCommonSubsequence (text1: string, text2: string): number {
  const dp = Array.from({ length: text1.length + 1 }, () => Array.from<number>({ length: text2.length + 1 }));

  for (let i = 0; i <= text1.length; i++) {
    dp[i][0] = 0;
  }

  for (let j = 0; j <= text2.length; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i][j - 1],
        dp[i - 1][j - 1] + (text1[i - 1] === text2[j - 1] ? 1 : 0)
      );
    }
  }

  return dp[text1.length][text2.length];
}
// @lc code=end
