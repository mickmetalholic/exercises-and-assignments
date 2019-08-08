/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  let x = 0;
  for (const num of nums) {
    x ^= num;
  }
  // x = res1 ^ res2

  let n = 1;
  while ((n & x) === 0) {
    n = n << 1;
  }
  // use n to divide the elements into two groups
  const res = [0, 0];
  for (const num of nums) {
    if ((n & num) === 0) {
      res[0] ^= num;
    } else {
      res[1] ^= num;
    }
  }
  return res;
}
