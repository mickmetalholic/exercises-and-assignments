/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function countBits (n: number): number[] {
  if (n === 0) {
    return [0]
  }

  const result = [0, 1]

  let i = 2
  let k = 2
  while (i <= n) {
    const start = Math.pow(2, k - 1)
    const end = start * 2
    for (i = start; i < Math.min(n + 1, end); i++) {
      result.push(result[i - start / 2] + (i < start + start / 2 ? 0 : 1))
    }
    k++
  }

  return result
}
// @lc code=end
