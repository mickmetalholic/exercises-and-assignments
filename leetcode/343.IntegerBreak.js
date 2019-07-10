/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
  const maxProd = [];
  maxProd[0] = 0;

  for (let i = 1; i < n; i++) {
    maxProd[i] = i;
    for (let j = 1; j < i; j++) {
      maxProd[i] = Math.max(j * maxProd[i - j], maxProd[i]);
    }
  }

  maxProd[n] = 1;
  for (let j = 1; j < n; j++) {
    maxProd[n] = Math.max(j * maxProd[n - j], maxProd[n]);
  }


  return maxProd[n];
}
