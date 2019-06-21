/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  if (n <= 2) return 0;

  const isPrimes = new Array(n).fill(true);
  isPrimes[0] = false;
  isPrimes[1] = false;
  let res = 0;
  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) {
      for (let j = 2; j * i < n; j++) {
        isPrimes[j * i] = false;
      }
      res++;
    }
  }
  return res;
}
