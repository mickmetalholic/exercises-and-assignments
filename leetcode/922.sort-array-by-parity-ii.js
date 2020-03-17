/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParityII(A) {
  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0 && A[i] % 2 === 1) {
      let j = i + 1;
      while (A[j] % 2 === 1) {
        j += 2;
      }
      [A[i], A[j]] = [A[j], A[i]];
    } else if (i % 2 === 1 && A[i] % 2 === 0) {
      let j = i + 1;
      while (A[j] % 2 === 0) {
        j += 2;
      }
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  return A;
}
// @lc code=end
