/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
  const res = [];
  for (const num of nums) {
    if (res.length === 0) {
      res.push(num);
    } else if (res.length === 1) {
      if (num < res[0]) {
        res[0] = num;
      } else if (num > res[0]) {
        res.push(num);
      }
    } else if (res.length === 2) {
      if (num > res[1]) {
        return true;
      } else if (num < res[1] && num > res[0]) {
        res[1] = num;
      } else if (num < res[0]) {
        res[0] = num;
      }
    }
  }
  return false;
}
