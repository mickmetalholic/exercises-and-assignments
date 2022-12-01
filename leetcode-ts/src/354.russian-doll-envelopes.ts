/*
 * @lc app=leetcode id=354 lang=typescript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
function maxEnvelopes (envelopes: number[][]): number {
  envelopes.sort(([w1, h1], [w2, h2]) => {
    if (w1 > w2) {
      return 1
    } else if (w1 < w2) {
      return -1
    } else {
      return h2 - h1
    }
  })

  const min = [envelopes[0][1]]
  for (let i = 1; i < envelopes.length; i++) {
    const [, h] = envelopes[i]
    const index = _search(h, min)
    min[index] = h
  }
  return min.length

  function _search (n: number, arr: number[]): number {
    let i = 0
    let j = arr.length
    while (i < j) {
      const m = i + Math.floor((j - i) / 2)
      if (arr[m] < n) {
        i = m + 1
      } else {
        j = m
      }
    }
    return i
  }
}
// @lc code=end
