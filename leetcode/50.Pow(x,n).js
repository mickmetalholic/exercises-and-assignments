/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  if (n < 0) {
    return 1 / _pow(x, Math.abs(n));
  } else if (n > 0) {
    return _pow(x, Math.abs(n));
  } else {
    return 1;
  }

  function _pow(x, n) {
    if (n === 1) return x;
    const res = _pow(x, Math.floor(n / 2));
    return res * res * (n % 2 ? x : 1);
  }
}
