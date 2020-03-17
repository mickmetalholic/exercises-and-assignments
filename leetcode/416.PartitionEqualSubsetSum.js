/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2) return false;

  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    if (dp[target - num]) return true;
    for (let i = target - 1; i - num >= 0 && i >= 0; i--) {
      dp[i] = dp[i - num] || dp[i];
    }
  }
  return dp[target];
}
