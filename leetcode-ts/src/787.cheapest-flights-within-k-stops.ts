/*
 * @lc app=leetcode id=787 lang=typescript
 *
 * [787] Cheapest Flights Within K Stops
 */

// @lc code=start
function findCheapestPrice (n: number, flights: number[][], src: number, dst: number, k: number): number {
  const cityFlights = flights.reduce((res, [f, t, p]) => {
    res[f] = res[f] || []
    res[f].push([t, p])
    return res
  }, {})
  const dp = Array.from({ length: n }, () => Array.from<number>({ length: k + 1 }))
  return _find(src, k)

  function _find(current: number, left: number): number {
    if (current === dst) {
      return 0
    }

    if (left === -1) {
      return -1
    }

    if (dp[current][left]) {
      return dp[current][left]
    }

    const currentCityFlights = cityFlights[current] || []
    const results: number[] = []
    for (const [t, p] of currentCityFlights) {
      const price = _find(t, left - 1)
      if (price !== -1) {
        results.push(p + price)
      }
    }
    dp[current][left] = results.length === 0 ? -1 : Math.min(...results)
    return dp[current][left]
  }
}
// @lc code=end
