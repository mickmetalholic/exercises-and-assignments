/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr (haystack: string, needle: string): number {
  const dp = Array.from(
    { length: haystack.length },
    () => Array.from({ length: needle.length }, () => false)
  )

  let res = -1

  for (let i = haystack.length - 1; i >= 0; i--) {
    for (let j = needle.length - 1; j >= 0; j--) {
      if (haystack[i] === needle[j]) {
        if (j === needle.length - 1) {
          dp[i][j] = true
        } else if (i === haystack.length - 1) {
          dp[i][j] = false
        } else {
          dp[i][j] = dp[i + 1][j + 1]
        }
        if (dp[i][j] && j === 0) {
          res = i
        }
      }
    }
  }

  return res
}
// @lc code=end
