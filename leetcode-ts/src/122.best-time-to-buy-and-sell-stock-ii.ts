/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit (prices: number[]): number {
  const holdProfit = Array.from({ length: prices.length }, () => 0)
  const soldProfit = Array.from({ length: prices.length }, () => 0)

  holdProfit[0] = -prices[0]
  soldProfit[0] = 0

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    holdProfit[i] = Math.max(holdProfit[i - 1], soldProfit[i - 1] - price)
    soldProfit[i] = Math.max(soldProfit[i - 1], holdProfit[i - 1] + price)
  }

  return soldProfit[prices.length - 1]
}
// @lc code=end
