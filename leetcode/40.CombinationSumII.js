/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  dfs([], target, 0);
  return res;

  function dfs(combination, curTarget, index) {
    if (curTarget === 0) {
      res.push(combination.slice());
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (
        curTarget - candidates[index] >= 0
        && (i === index || candidates[i - 1] !== candidates[i])
      ) {
        combination.push(candidates[i]);
        dfs(combination, curTarget - candidates[i], i + 1);
        combination.pop();
      }
    }
  }
}
