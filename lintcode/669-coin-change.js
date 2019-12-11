/**
 * @param {number[]} coins a list of integer
 * @param {number} amount a total amount of money amount
 * @return {number} the fewest number of coins that you need to make up
 */
function coinChange(coins, amount) {
  const amounts = [];
  amounts[0] = 0;

  for (let i = 1; i <= amount; i++) {
    amounts[i] = -1;
    for (const coin of coins) {
      if (i - coin >= 0 && amounts[i - coin] >= 0) {
        if (amounts[i] === -1) {
          amounts[i] = amounts[i - coin] + 1;
        } else {
          amounts[i] = Math.min(amounts[i], amounts[i - coin] + 1);
        }
      }
    }
  }

  return amounts[amount];
}
