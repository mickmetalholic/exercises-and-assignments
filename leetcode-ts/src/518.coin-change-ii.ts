/*
* @lc app=leetcode id=518 lang=typescript
*
* [518] Coin Change II
*/

// @lc code=start
function change(amount: number, coins: number[]): number {
  const dp = Array.from<number>({ length: amount + 1 }).fill(0);

  for (let j = 0; j <= amount; j++) {
    dp[j] = j % coins[0] ? 0 : 1;
  }

  for (let i = 1; i < coins.length; i++) {
    const coin = coins[i];
    for (let j = 1; j <= amount; j++) {
      dp[j] = dp[j] + (j - coin >= 0 ? dp[j - coin] : 0);
    }
  }

  return dp[amount];
}
// @lc code=end
