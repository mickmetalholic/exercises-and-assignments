/*
 * @lc app=leetcode id=413 lang=javascript
 *
 * [413] Arithmetic Slices
 */
/**
 * @param {number[]} A
 * @return {number}
 */
function numberOfArithmeticSlices(A) {
  let res = 0;
  const dp = [];
  dp[0] = dp[1] = 0;
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = 1 + dp[i - 1];
    } else {
      dp[i] = 0;
    }
    res += dp[i];
  }
  return res;
}
