/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
function minSwap(A, B) {
  const keep = [], swap = [];
  keep[0] = 0;
  swap[0] = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
      // kept in last time
      keep[i] = keep[i - 1];
      // swaped in last time
      swap[i] = swap[i - 1] + 1;
    }

    if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
      keep[i] = typeof keep[i] === 'number' ? Math.min(swap[i - 1], keep[i]) : swap[i - 1];
      swap[i] = typeof swap[i] === 'number' ? Math.min(keep[i - 1] + 1, swap[i]) : keep[i - 1] + 1;
    }
  }

  return Math.min(keep[A.length - 1], swap[A.length - 1]);
}
