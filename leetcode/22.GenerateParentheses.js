/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const res = [];
  _generate(n, n, '');
  return res;

  function _generate(left, right, str) {
    if (left > right) return;
    if (left === 0 && right === 0) res.push(str);

    if (left > 0) _generate(left - 1, right, `${str}(`);
    if (right > 0) _generate(left, right - 1, `${str})`);
  }
}
