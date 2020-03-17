/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
  const res = [];
  search([], n, 1);
  return res;

  function search(combination, target, start) {
    if (target === 0 && combination.length === k) {
      res.push(combination.slice());
      return;
    } else if (target === 0 || combination.length === k) {
      return;
    }

    for (let i = start; target - i >= 0 && i <= 9; i++) {
      combination.push(i);
      search(combination, target - i, i + 1);
      combination.pop();
    }
  }
}
