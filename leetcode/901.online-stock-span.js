/*
 * @lc app=leetcode id=901 lang=javascript
 *
 * [901] Online Stock Span
 */

class StockSpanner {
  constructor() {
    this._prices = [];
    this._spans = [];
  }

  /** 
   * @param {number} price
   * @return {number}
   */
  next(price) {
    const { _prices: prices, _spans: spans } = this;
    prices.push(price);

    let span = 1, curIndex = prices.length - 2;
    while (curIndex >= 0 && prices[curIndex] <= price) {
      span += spans[curIndex];
      curIndex -= spans[curIndex];
    }
    spans.push(span);
    return span;
  }
}

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
