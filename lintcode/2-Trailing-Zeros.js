/**
 * @param n: A long integer
 * @return: An integer, denote the number of trailing zeros in n!
 */
function trailingZeros (n) {
  let k = n, res = 0;
  while (k > 0) {
    k = Math.floor(k / 5);
    res += k;
  }
  return res;
}
