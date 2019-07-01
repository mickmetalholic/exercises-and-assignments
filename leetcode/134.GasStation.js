/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
  const totalGas = gas.reduce((a, b) => a + b, 0);
  const totalCost = cost.reduce((a, b) => a + b, 0);
  if (totalGas < totalCost) return -1;

  let cap = 0, res = 0;
  for (let i = 0; i < gas.length; i++) {
    cap += (gas[i] - cost[i]);
    if (cap < 0) {
      cap = 0;
      res = i + 1;
    }
  }
  return res;
}
