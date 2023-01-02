/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isMatch (s: string, p: string): boolean {
  const dp = Array.from({ length: s.length }, () => Array.from<boolean>({ length: p.length }))
  return _isMatch(0, 0)

  function _isMatch(i: number, j: number): boolean {
    if (j === p.length) {
      return i === s.length
    }

    if (i === s.length) {
      if (p[j] === '*') {
        return _isMatch(i, j + 1)
      } else if (p[j + 1] === '*') {
        return _isMatch(i, j + 2)
      } else {
        return false
      }
    }

    if (dp[i][j] === true || dp[i][j] === false) {
      return dp[i][j]
    }

    const sc = s[i]
    const pc = p[j]

    if (pc === '*') {
      const prev = p[j - 1]
      if (prev === '.' || prev === sc) {
        dp[i][j] = _isMatch(i, j + 1) || _isMatch(i + 1, j) || _isMatch(i + 1, j + 1)
      } else {
        dp[i][j] = _isMatch(i, j + 1)
      }
    } else {
      dp[i][j] = false
      if (pc === '.' || pc === sc) {
        dp[i][j] = _isMatch(i + 1, j + 1)
      }
      if (p[j + 1] === '*') {
        dp[i][j] = dp[i][j] || _isMatch(i, j + 2)
      }
    }

    return dp[i][j]
  }
}
// @lc code=end
