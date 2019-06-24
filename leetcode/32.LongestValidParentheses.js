/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let sold1 = Math.max(), sold2 = Math.max();
  let hold1 = -prices[0], hold2 = Math.max();

  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    const nextSold1 = Math.max(sold1, hold1 + prices[i]);
    const nextSold2 = Math.max(sold2, hold2 + prices[i]);
    const nextHold1 = Math.max(hold1, - prices[i]);
    const nextHold2 = Math.max(hold2, sold1 - prices[i]);
    res = Math.max(res, nextSold1, nextSold2);
    sold1 = nextSold1;
    sold2 = nextSold2;
    hold1 = nextHold1;
    hold2 = nextHold2;
  }
  return res;
}
