/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
function findTargetSumWays(nums, S) {
  // dp[i][j] is the number of ways that 0~i elements of nums
  // that sum to `j`
  const dp = Array(nums.length);

  const maxSum = nums.reduce((a, b) => a + b);

  // i = 0
  dp[0] = Array(2 * maxSum + 1).fill(0);
  dp[0][nums[0] + maxSum] = nums[0] === 0 ? 2 : 1;
  dp[0][-nums[0] + maxSum] = nums[0] === 0 ? 2 : 1;

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Array(2 * maxSum + 1);
    for (let j = -maxSum; j <= maxSum; j++) {
      dp[i][j + maxSum] = ((j - nums[i]) >= -maxSum ? dp[i - 1][j - nums[i] + maxSum] : 0)
        + ((j + nums[i]) <= maxSum ? dp[i - 1][j + nums[i] + maxSum] : 0);
    }
  }

  return dp[nums.length - 1][S + maxSum] || 0;
}
