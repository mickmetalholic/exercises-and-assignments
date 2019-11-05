/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
function partitionLabels(S) {
  const lastIndices = S.split('').reduce((res, e, i) => {
    res[e] = i;
    return res;
  }, {});

  const res = [];
  let start = 0, end = 0;
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, lastIndices[S[i]]);
    if (end === i) {
      res.push(end - start + 1);
      start = i + 1;
    }
  }
  return res;
}
// @lc code=end
