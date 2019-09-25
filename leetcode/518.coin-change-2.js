/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
  const ways = new Array(amount + 1).fill(0);
  ways[0] = 1;
  for (const coin of coins) {
    for (let i = 0; i <= amount; i++) {
      if (i - coin >= 0) {
        ways[i] += ways[i - coin];
      }
    }
  }
  return ways[amount];
}
