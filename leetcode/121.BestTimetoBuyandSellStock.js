/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let min = prices[0], res = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    res = Math.max(res, prices[i] - min);
  }
  return res;
};