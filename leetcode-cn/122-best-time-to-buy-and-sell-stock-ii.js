/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  const profits = [];
  for (let i = 1; i < prices.length; i++) {
    profits[i] = prices[i] - prices[i - 1];
  }
  return profits.filter(p => p > 0).reduce((res, p) => res + p, 0);
}
