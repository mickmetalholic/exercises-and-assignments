/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome (s: string): string {
  if (s.length === 0) {
    return ''
  }

  const dp = Array.from({ length: s.length }, () => Array.from({ length: s.length }).fill(false))

  let res = s[0]
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else if (i === j || i + 1 === j) {
        dp[i][j] = true
      } else {
        dp[i][j] = dp[i + 1][j - 1]
      }

      if (Boolean(dp[i][j]) && j - i + 1 > res.length) {
        res = s.slice(i, j + 1)
      }
    }
  }

  return res
}
// @lc code=end
