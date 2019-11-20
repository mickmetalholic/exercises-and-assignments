/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
function findCheapestPrice(n, flights, src, dst, K) {
  const graph = Array.from({ length: n }, _ => new Map());

  for (const [s, d, p] of flights) {
    graph[s].set(d, p);
  }

  const prices = {};
  let nodes = [src];
  for (let i = 0; i <= K; i++) {
    const next = new Set();
    const prevPrices = nodes.map(e => prices[e] || 0);
    for (let j = 0; j < nodes.length; j++) {
      const node = nodes[j];
      for (const [d, p] of graph[node].entries()) {
        if (!prices.hasOwnProperty(d) || prices[d] > prevPrices[j] + p) {
          prices[d] = prevPrices[j] + p;
          next.add(d);
        }
      }
    }
    nodes = [...next];
  }
  return prices.hasOwnProperty(dst) ? prices[dst] : -1;
}
// @lc code=end
