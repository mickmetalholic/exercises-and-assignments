/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const dp = [];
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let result = -1;
    coins.forEach(coin => {
      if (i - coin >= 0 && dp[i - coin] >= 0) {
        result = result > 0 ? Math.min(dp[i - coin] + 1, result) : (dp[i - coin] + 1);
      }
    });
    dp[i] = result;
  }
  return dp[amount];
}
