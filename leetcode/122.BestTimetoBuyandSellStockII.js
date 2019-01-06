/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  const profits = [0];
  for (let i = 1; i < prices.length; i++) {
    profits[i] = prices[i] - prices[i - 1];
  }
  return profits.filter(p => p > 0).reduce((prev, cur) => prev + cur, 0);
};