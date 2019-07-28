/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (const num of nums) {
      if ((num >> i & 1) === 1) {
        count++;
      }
    }
    if (count % 3) {
      res |= (1 << i);
    }
  }
  return res;
}
