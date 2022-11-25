/*
 * @lc app=leetcode id=322 lang=typescript
 *
 * [322] Coin Change
 */

// @lc code=start
function coinChange (coins: number[], amount: number): number {
  const count: number[] = [0]

  for (let i = 1; i <= amount; i++) {
    let res = -1
    for (const coin of coins) {
      const left = i - coin
      if (left >= 0 && count[left] !== -1) {
        res = res === -1 ? count[left] + 1 : Math.min(count[left] + 1, res)
      }
    }
    count[i] = res
  }

  return count[amount]
}
// @lc code=end
