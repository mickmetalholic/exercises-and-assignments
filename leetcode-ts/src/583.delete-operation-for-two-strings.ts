/*
 * @lc app=leetcode id=1143 lang=typescript
 *
 * [583] Delete Operation for Two Strings
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  const dp = Array.from({ length: word1.length + 1 }, () => Array.from<number>({ length: word2.length + 1 }).fill(0));

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i][j - 1],
        dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 1 : 0)
      );
    }
  }

  return word1.length + word2.length - dp[word1.length][word2.length] * 2;
}
// @lc code=end
