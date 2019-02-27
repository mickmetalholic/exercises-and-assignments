/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
  const dp = [];
  dp.push(cost[0]);
  dp.push(cost[1]);
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}
