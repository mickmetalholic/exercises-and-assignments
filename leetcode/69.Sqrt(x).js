/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  let n = 1;
  while (Math.abs(n * n - x) >= 1) {
    n = (n + x / n) / 2;
  }
  return Math.floor(n);
};
