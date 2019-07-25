/**
 * @param prices: Given an integer array
 * @return: Maximum profit
 */
function maxProfit(prices) {
  if (prices.length === 0) return 0;
  const sold = [], hold = [];
  sold[0] = 0;
  hold[0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    hold[i] = Math.max(hold[i - 1], sold[i - 1] - prices[i]);
    sold[i] = Math.max(sold[i - 1], hold[i - 1] + prices[i]);
  }
  return sold[prices.length - 1];
}
