/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves2(nums) {
  nums.sort((a, b) => a - b);
  let i = 0, j = nums.length - 1;
  let res = 0;
  while (i < j) {
    res += (nums[j--] - nums[i++]);
  }
  return res;
}
