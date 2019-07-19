/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
  const res = [];
  const map = nums.reduce((prev, n) => {
    prev[n] = prev[n] || 0;
    prev[n]++;
    if (prev[n] === 2) res[0] = n;
    return prev;
  }, {});
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      res[1] = i;
      return res;
    }
  }
}
