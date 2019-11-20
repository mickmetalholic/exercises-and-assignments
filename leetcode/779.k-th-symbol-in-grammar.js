/*
 * @lc app=leetcode id=779 lang=javascript
 *
 * [779] K-th Symbol in Grammar
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
function kthGrammar(N, K) {
  if (N === 1) return 0;

  const parent = kthGrammar(N - 1, Math.floor((K + 1) / 2));
  if (parent === 0) {
    // check N is left or right node
    return K % 2 ? 0 : 1;
  } else {
    // check N is left or right node
    return K % 2 ? 1 : 0;
  }
}
// @lc code=end
