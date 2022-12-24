/*
 * @lc app=leetcode id=416 lang=typescript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
function canPartition (nums: number[]): boolean {
  const sum = nums.reduce((res, n) => res + n, 0);
  if (sum % 2) {
    return false;
  }

  const subsetSum = sum / 2;

  const dp = Array.from<boolean>({ length: subsetSum + 1 }).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = subsetSum; j >= 0; j--) {
      dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]]);
    }
  }

  return dp[subsetSum];
}
// @lc code=end
