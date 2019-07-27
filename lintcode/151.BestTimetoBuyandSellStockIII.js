/**
 * @param prices: Given an integer array
 * @return: Maximum profit
 */
function maxProfit(prices) {
  if (prices.length <= 1) return 0;

  let hold1 = -prices[0], hold2 = Math.max(), sold1 = Math.max(), sold2 = Math.max();

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const nextSold1 = Math.max(sold1, hold1 + price);
    const nextSold2 = Math.max(sold2, hold2 + price);
    const nextHold1 = Math.max(hold1, -price);
    const nextHold2 = Math.max(hold2, sold1 - price);
    sold1 = nextSold1;
    sold2 = nextSold2;
    hold1 = nextHold1;
    hold2 = nextHold2;
  }

  // sold0 is 0
  return Math.max(0, sold1, sold2);
}
