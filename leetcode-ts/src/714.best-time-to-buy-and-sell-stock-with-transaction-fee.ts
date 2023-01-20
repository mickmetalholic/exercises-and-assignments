/*
 * @lc app=leetcode id=714 lang=typescript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
function maxProfit (prices: number[], fee: number): number {
  const hold = Array.from({ length: prices.length }, () => 0)
  const sold = Array.from({ length: prices.length }, () => 0)

  hold[0] = -prices[0]
  sold[0] = 0

  for (let i = 1; i < prices.length; i++) {
    hold[i] = Math.max(hold[i - 1], sold[i - 1] - prices[i])
    sold[i] = Math.max(sold[i - 1], hold[i - 1] + prices[i] - fee)
  }

  return sold[prices.length - 1]
}
// @lc code=end
