/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  let left = Math.abs(dividend), div = Math.abs(divisor);
  let res = 0, count = 1;
  while (left >= div) {
    left -= div;
    res += count;
    div *= 2;
    count *= 2;
    if (left < div) {
      div = Math.abs(divisor);
      count = 1;
    }
  }
  return res * (((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) ? -1 : 1);
}