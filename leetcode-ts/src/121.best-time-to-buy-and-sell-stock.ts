/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function maxProfit (prices: number[]): number {
  let min = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    profit = Math.max(price - min, profit)
    min = Math.min(min, price)
  }
  return profit
}
// @lc code=end
