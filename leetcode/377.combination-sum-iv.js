/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function combinationSum4(nums, target) {
  const dp = [1];
  for (let i = 1; i <= target; i++) {
    dp[i] = 0;
    for (const num of nums) {
      if (i - num >= 0 && dp[i - num] > 0) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
}
