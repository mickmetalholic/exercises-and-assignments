/**
 * @param nums: An integer array
 * @return: The length of LIS (longest increasing subsequence)
 */
function longestIncreasingSubsequence(nums) {
  if (nums.length === 0) return 0;

  let res = 1;
  // dp[i] := the length of LIS that including nums[i] of nums[0, i]
  const dp = [];
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (num > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
}
