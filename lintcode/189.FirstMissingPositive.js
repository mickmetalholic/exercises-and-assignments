/**
 * @param {number[]} A: An array of integers
 * @return: An integer
 */
function firstMissingPositive(A) {
  for (let i = 0; i < A.length; i++) {
    while (
      // A[i] should be at position A[i] - 1
      A[i] - 1 >= 0
      && A[i] - 1 < A.length
      && A[i] - 1 !== i
      && A[i] !== A[A[i] - 1]
    ) {
      const tmp = A[i];
      A[i] = A[tmp - 1];
      A[tmp - 1] = tmp;
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] - 1 !== i) {
      return i + 1;
    }
  }
  return A.length + 1;
}
