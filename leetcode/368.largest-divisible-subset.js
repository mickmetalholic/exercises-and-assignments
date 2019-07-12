/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function largestDivisibleSubset(nums) {
  if (nums.length === 0) return [];

  nums.sort((a, b) => a - b);

  const dp = [], prev = [];
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    prev[i] = null;
    for (let j = 0; j < i; j++) {
      if (
        nums[i] % nums[j] === 0
        && dp[j] + 1 > dp[i]
      ) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  const res = [];
  let i = maxIndex;
  while (i !== null) {
    res.push(nums[i]);
    i = prev[i];
  }
  return res;
}
