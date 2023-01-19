/*
 * @lc app=leetcode id=309 lang=typescript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
function maxProfit (prices: number[]): number {
  const hold = Array.from({ length: prices.length }, () => 0)
  const sold = Array.from({ length: prices.length }, () => 0)

  hold[0] = -prices[0]
  sold[0] = 0

  let isCooldown = false
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    hold[i] = isCooldown ? Math.max(hold[i - 1], sold[i - 2] - price) : Math.max(hold[i - 1], sold[i - 1] - price)
    sold[i] = Math.max(sold[i - 1], hold[i - 1] + price)
    isCooldown = sold[i - 1] < hold[i - 1] + price
  }

  return sold[prices.length - 1]
}
// @lc code=end
