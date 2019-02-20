/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
  const res = [];
  const stack = [];
  _search(n, 1);
  return res;

  function _search(n, i) {
    if (stack.length === k) {
      if (n === 0) {
        res.push(stack.slice());
      }
      return;
    }

    if (n < 0 || i > 9) return;

    _search(n, i + 1);
    stack.push(i);
    _search(n - i, i + 1);
    stack.pop();
  }
}
