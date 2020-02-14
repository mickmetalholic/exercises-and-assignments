/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const coinCount = new Array(amount + 1).fill(-1);
  coinCount[0] = 0;
  for (const coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i - coin >= 0 && coinCount[i - coin] > -1) {
        coinCount[i] = coinCount[i] === -1 ?
          coinCount[i - coin] + 1 : Math.min(coinCount[i], coinCount[i - coin] + 1);
      }
    }
  }
  return coinCount[amount];
}
