/**
 * @param {string} s
 * @return {number}
 */
function titleToNumber(s) {
  let res = 0;
  for (const ch of s) {
    res = res * 26 + _transform(ch);
  }
  return res;

  function _transform(ch) {
    return ch.charCodeAt() - 64;
  }
}
