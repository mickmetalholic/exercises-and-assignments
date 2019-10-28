/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
function findLength(A, B) {
  // length[i][j] := the maximum length of subarray ends with i-th element of A and subarray ends with j-th element of B
  const length = Array.from({ length: A.length }, _ => new Array(B.length));

  let res = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        length[i][j] = (i === 0 || j === 0) ? 1 : length[i - 1][j - 1] + 1;
      } else {
        length[i][j] = 0;
      }
      res = Math.max(res, length[i][j]);
    }
  }
  return res;
}
// @lc code=end
