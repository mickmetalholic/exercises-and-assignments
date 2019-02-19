/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  const res = [];
  const candidatesCount = {};
  candidates.forEach(candidate => {
    if (!candidatesCount[candidate]) {
      candidatesCount[candidate] = 0;
    }
    candidatesCount[candidate]++;
  });
  _search(Object.keys(candidatesCount).map(Number), target, [], 0);
  return res;

  function _search(candidates, target, combination, i) {
    if (target === 0) {
      res.push(combination);
      return;
    }

    if (i < candidates.length) {
      _search(candidates, target, combination.slice(), i + 1);

      let candidate = candidates[i], remain = target, count = 1;
      while (count <= candidatesCount[candidate] && (remain -= candidate) >= 0) {
        _search(candidates, remain, combination.concat(new Array(count).fill(candidate)), i + 1);
        count++;
      }
    }
  }
}
