/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  let res = 0;
  for (const [num, count] of map) {
    if (map.has(num + 1)) {
      res = Math.max(res, map.get(num + 1) + count);
    }
    if (map.has(num - 1)) {
      res = Math.max(res, map.get(num - 1) + count);
    }
  }
  return res;
}
