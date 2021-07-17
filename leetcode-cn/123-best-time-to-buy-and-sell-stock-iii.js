/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  // 完成了1次买
  let hold1 = -prices[0];
  // 完成了1次买和1次卖
  let sell1 = Math.max();
  // 完成了1次买和1次卖 并进行了第2次买
  let hold2 = Math.max();
  // 完成了2次买和2次卖
  let sell2 = Math.max();

  let res = 0;

  for (let i = 1; i < prices.length; i++) {
    const nextHold1 = Math.max(hold1, -prices[i]);
    const nextSell1 = Math.max(sell1, hold1 + prices[i]);
    const nextHold2 = Math.max(hold2, sell1 - prices[i]);
    const nextSell2 = Math.max(sell2, hold2 + prices[i]);

    res = Math.max(nextSell1, nextSell2, res);

    hold1 = nextHold1;
    sell1 = nextSell1;
    hold2 = nextHold2
    sell2 = nextSell2
  }

  return res;
}
