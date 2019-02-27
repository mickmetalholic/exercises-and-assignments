/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const res = [];
  const stack = [];
  _search(1);
  return res;

  function _search(i) {
    if (stack.length === k) {
      res.push(stack.slice());
      return;
    }
    if (i > n) return;

    _search(i + 1);

    stack.push(i);
    _search(i + 1);
    stack.pop();
  }
}
