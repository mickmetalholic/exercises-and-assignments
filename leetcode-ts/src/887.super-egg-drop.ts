/*
 * @lc app=leetcode id=887 lang=typescript
 *
 * [887] Super Egg Drop
 */

// @lc code=start
function superEggDrop(k: number, n: number): number {
  const dp = Array.from({ length: k + 1 }, () => Array.from<number>({ length: n + 1 }).fill(-1))

  for (let i = 1; i <= n; i++) {
    // k === 1
    dp[1][i] = i
  }

  for (let i = 1; i <= k; i++) {
    // n === 0
    dp[i][0] = 0
    // n === 1
    dp[i][1] = 1
  }

  return _find(k, n)

  function _find(_k: number, _n: number): number {
    if (dp[_k][_n] >= 0) {
      return dp[_k][_n]
    }

    let low = 1
    let high = _n
    while (low + 1 < high) {
      const x = Math.floor((low + high) / 2)
      // broken
      const f1 = _find(_k - 1, x - 1)
      // not broken
      const f2 = _find(_k, _n - x)
      if (f1 < f2) {
        low = x
      } else if (f1 > f2) {
        high = x
      } else {
        low = x
        high = x
      }
    }

    dp[_k][_n] = 1 + Math.min(
      Math.max(
        _find(_k - 1, low - 1),
        _find(_k, _n - low)
      ),
      Math.max(
        _find(_k - 1, high - 1),
        _find(_k, _n - high)
      ),
    )

    return dp[_k][_n]
  }
}
// @lc code=end
