/*
 * @lc app=leetcode id=456 lang=javascript
 *
 * [456] 132 Pattern
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function find132pattern(nums) {
  // third := the possible maximum value of third number
  let third = Math.max();
  // stores all the elements before and larger than third
  // the upper elements are larger and have smaller index than bottom
  // elements
  const stack = [];
  // second: the top of stack
  // second and third should be as large as possible
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < third) {
      return true;
    } else {
      while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
        third = stack.pop();
      }
      stack.push(nums[i]);
    }
  }
  return false;
}
