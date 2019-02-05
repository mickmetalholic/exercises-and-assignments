/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b);

  const res = [];
  _conbinationSum([], candidates, target, res);
  return res;

  function _conbinationSum(combination, candidates, remain, res) {
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i] > remain) return;

      const maxCount = Math.floor(remain / candidates[i]);
      const nextCandidates = candidates.slice(i + 1);

      let nextRemain = remain;
      for (let count = 1; count <= maxCount; count++) {
        nextRemain -= candidates[i];
        const nextCombination = combination.concat(new Array(count).fill(candidates[i]));
        if (nextRemain === 0) {
          res.push(nextCombination);
        } else {
          _conbinationSum(nextCombination, nextCandidates, nextRemain, res);
        }
      }
    }
  }
}
