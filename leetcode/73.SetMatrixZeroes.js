/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const shouldFirstRowBeZero = matrix[0].some(e => e === 0);
  let shouldFirstColBeZero = false;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      shouldFirstColBeZero = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (
        matrix[i][0] === 0
        || matrix[0][j] === 0
      ) {
        matrix[i][j] = 0;
      }
    }
  }

  if (shouldFirstRowBeZero) {
    matrix[0].forEach((_, i, arr) => arr[i] = 0);
  }
  if (shouldFirstColBeZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
}
