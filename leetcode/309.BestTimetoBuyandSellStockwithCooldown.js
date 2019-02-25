/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  if (prices.length === 0) return 0;

  const sell = [], buy = [];
  sell[0] = 0;
  sell[1] = Math.max(0, -prices[0] + prices[1]);
  buy[0] = -prices[0];
  buy[1] = Math.max(-prices[0], -prices[1]);
  for (let i = 2; i < prices.length; i++) {
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);
  }
  return sell[prices.length - 1];
}
