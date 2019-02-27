/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  const dp = [];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(...dp.slice(-3, -1), 0) + nums[i];
  }
  return Math.max(...dp);
}
