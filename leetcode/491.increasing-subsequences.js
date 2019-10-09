/*
 * @lc app=leetcode id=491 lang=javascript
 *
 * [491] Increasing Subsequences
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubsequences(nums) {
  const res = [];
  search(0, []);
  return res;

  function search(depth, seq) {
    if (depth === nums.length) return;

    const seen = new Set();
    for (let i = depth; i < nums.length; i++) {
      const num = nums[i];
      if (
        !seen.has(num)
        && (seq.length === 0 || seq[seq.length - 1] <= num)
      ) {
        seen.add(num);
        const cur = seq.concat(num);
        if (cur.length > 1) {
          res.push(cur);
        }
        search(i + 1, cur);
      }
    }
  }
}
