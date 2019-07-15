/*
 * @lc app=leetcode id=1014 lang=javascript
 *
 * [1014] Best Sightseeing Pair
 */
/**
 * @param {number[]} A
 * @return {number}
 */
function maxScoreSightseeingPair(A) {
  let prevMax = A[0] + 0, res = Math.max();
  for (let i = 1; i < A.length; i++) {
    res = Math.max(res, prevMax + A[i] - i);
    prevMax = Math.max(prevMax, A[i] + i);
  }
  return res;
}
