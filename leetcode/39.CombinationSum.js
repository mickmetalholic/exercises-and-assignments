/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const res = [];
  dfs([], target, 0);
  return res;

  function dfs(combination, curTarget, index) {
    if (curTarget === 0) {
      res.push(combination.slice());
      return;
    };

    if (curTarget - candidates[index] >= 0) {
      combination.push(candidates[index]);
      dfs(combination, curTarget - candidates[index], index);
      combination.pop(candidates[index]);
    }
    if (index + 1 < candidates.length) {
      dfs(combination, curTarget, index + 1);
    }
  }
}
