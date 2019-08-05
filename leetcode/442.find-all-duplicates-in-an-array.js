/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (
      // current number is not at its correct position
      nums[i] - 1 !== i
      // the target position doesn't have the correct number
      && nums[nums[i] - 1] !== nums[i]
    ) {
      const cur = nums[i];
      const target = nums[cur - 1];
      nums[i] = target;
      nums[cur - 1] = cur;
    }
  }

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) {
      res.push(nums[i]);
    }
  }
  return res;
}
