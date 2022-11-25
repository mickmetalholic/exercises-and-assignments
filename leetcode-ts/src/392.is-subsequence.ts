/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence (s: string, t: string): boolean {
  if (s.length === 0) {
    return true
  }

  if (s.length > t.length) {
    return false
  }

  const dp = Array.from({ length: s.length + 1 })
    .map(_ => Array.from<boolean>({ length: t.length + 1 }))

  for (let j = 0; j <= t.length; j++) {
    dp[0][j] = true
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = i; j <= t.length; j++) {
      dp[i][j] = dp[i][j - 1]
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - 1]
      }
    }
  }

  return dp[s.length].some(e => e)
}
// @lc code=end
