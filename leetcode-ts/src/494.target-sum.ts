/*
 * @lc app=leetcode id=494 lang=typescript
 *
 * [494] Target Sum
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  const maxSum = nums.reduce((res, n) => res + n, 0);
  if (Math.abs(target) > maxSum) {
    return 0;
  }

  const sumCount = maxSum * 2 + 1;
  const dp = Array.from({ length: nums.length }, () => Array.from<number>({ length: sumCount }));

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = 0; j <= sumCount; j++) {
      if (i === 0) {
        if (num === 0 && j - maxSum === 0) {
          dp[i][j] = 2;
        } else {
          dp[i][j] = Math.abs(j - maxSum) === Math.abs(num) ? 1 : 0;
        }
      } else {
        dp[i][j] = (j - num >= 0 ? dp[i - 1][j - num] : 0) +
          (j + num <= sumCount ? dp[i - 1][j + num] : 0);
      }
    }
  }

  return dp[nums.length - 1][target + maxSum];
}
// @lc code=end
