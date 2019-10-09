/*
 * @lc app=leetcode id=473 lang=javascript
 *
 * [473] Matchsticks to Square
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function makesquare(nums) {
  if (nums.length === 0) return false;
  const totalLength = nums.reduce((a, b) => a + b);
  if (totalLength % 4) return false;
  const length = totalLength / 4;

  nums.sort((a, b) => b - a);
  return search(0, 0, 0, 0, 0);

  function search(depth, a, b, c, d) {
    if (depth === nums.length) {
      return a === length && b === length && c === length;
    }

    const num = nums[depth];
    if (a + num <= length && search(depth + 1, a + num, b, c, d)) {
      return true;
    }
    if (b + num <= length && search(depth + 1, a, b + num, c, d)) {
      return true;
    }
    if (c + num <= length && search(depth + 1, a, b, c + num, d)) {
      return true;
    }
    if (d + num <= length && search(depth + 1, a, b, c, d + num)) {
      return true;
    }
    return false;
  }
}
