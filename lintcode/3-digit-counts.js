/**
 * @param k: An integer
 * @param n: An integer
 * @return: An integer denote the count of digit k in 1..n
 */
function digitCounts (k, n) {
  if (n < 10 && k === 0) return 1;
  let res = 0, base = 1;
  while (n / base >= 1) {
    const lower = n % base;
    const higher = Math.floor(n / (base * 10));
    const cur = (n - lower) / base % 10;
    res += higher * base;
    if (cur === k) {
      res += (lower + 1);
    } else if (cur > k) {
      res += base;
    }
    base *= 10;
  }
  return k === 0 ? res - base / 10 : res;
}
