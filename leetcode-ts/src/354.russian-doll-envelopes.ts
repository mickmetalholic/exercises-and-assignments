/*
 * @lc app=leetcode id=354 lang=typescript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
function maxEnvelopes (envelopes: number[][]): number {
  envelopes.sort(([w1], [w2]) => w1 - w2)

  let res = 1
  const counts = [1]
  for (let i = 1; i < envelopes.length; i++) {
    const [w1, h1] = envelopes[i]
    counts[i] = 1
    for (let j = 0; j < i; j++) {
      const [w2, h2] = envelopes[j]
      if (w1 > w2 && h1 > h2) {
        counts[i] = Math.max(counts[i], counts[j] + 1)
      }
    }
    res = Math.max(res, counts[i])
  }
  return res
}
// @lc code=end
