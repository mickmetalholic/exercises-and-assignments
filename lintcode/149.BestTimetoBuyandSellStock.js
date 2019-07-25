/**
 * @param prices: Given an integer array
 * @return: Maximum profit
 */
function maxProfit(prices) {
  let lowest = prices[0], res = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
    } else {
      res = Math.max(res, prices[i] - lowest);
    }
  }
  return res;
}
