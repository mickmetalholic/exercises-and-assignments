/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
  nums.sort((a, b) => parseInt(`${b}${a}`) - parseInt(`${a}${b}`));
  const res = nums.join('');
  let i = 0;
  while (i < res.length - 1 && res[i] === '0') {
    i++;
  }
  return res.slice(i);
}
