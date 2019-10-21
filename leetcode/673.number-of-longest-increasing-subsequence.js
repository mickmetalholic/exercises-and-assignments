/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumberOfLIS(nums) {
  if (nums.length === 0) return 0;
  let maxLength = 1, maxLengthCount = 1;
  // length[i] := the max length of increasing subsequence ends with nums[i]
  // count[i] := the count of the longest increasing subsequence ends with nums[i]
  const length = [], count = [];
  length[0] = 1;
  count[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    length[i] = 1, count[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (length[j] + 1 > length[i]) {
          length[i] = length[j] + 1;
          count[i] = count[j];
        } else if (length[j] + 1 === length[i]) {
          count[i] += count[j];
        }
      }
    }
    if (length[i] > maxLength) {
      maxLength = length[i];
      maxLengthCount = count[i];
    } else if (length[i] === maxLength) {
      maxLengthCount += count[i];
    }
  }
  return maxLengthCount;
}
// @lc code=end
