/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
  let sold = 0, hold = -prices[0];
  for (const price of prices) {
    const nextSold = Math.max(sold, hold + price - fee);
    const nextHold = Math.max(hold, sold - price);
    sold = nextSold;
    hold = nextHold;
  }
  return sold;
}
