/*
 * @lc app=leetcode id=514 lang=typescript
 *
 * [514] Freedom Trail
 */

// @lc code=start
function findRotateSteps(ring: string, key: string): number {
  const dp = Array.from({ length: ring.length }, () => Array.from<number>({ length: key.length }).fill(0));

  const cToI = {}
  for (let i = 0; i < ring.length; i++) {
    const c = ring[i]
    cToI[c] = cToI[c] || []
    cToI[c].push(i)
  }

  return _findRotateSteps(0, 0)

  function _findRotateSteps(i: number, j: number): number {
    if (dp[i][j]) {
      return dp[i][j]
    }
    const indexes = cToI[key[j]]
    const steps: number[] = []
    for (const index of indexes) {
      const distance = Math.abs(index - i)
      const minStep = Math.min(distance, ring.length - distance)
      steps.push(minStep + (j === key.length - 1 ? 0 : _findRotateSteps(index, j + 1)))
    }
    const res = Math.min(...steps) + 1
    dp[i][j] = res
    return res
  }
}
// @lc code=end
