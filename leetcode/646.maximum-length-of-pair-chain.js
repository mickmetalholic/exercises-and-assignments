/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
  pairs.sort(([a1, b1], [a2, b2]) => b1 - b2);

  const first = pairs[0];
  let right = first[1], res = 1;
  for (let i = 1; i < pairs.length; i++) {
    const pair = pairs[i];
    if (pair[0] > right) {
      res++;
      right = pair[1];
    }
  }
  return res;
}
// @lc code=end
