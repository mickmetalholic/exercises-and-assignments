/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  let firstColIsZero = false;
  let firstRowIsZero = false;

  if (matrix[0][0] === 0) {
    firstColIsZero = true;
    firstRowIsZero = true;
  } else {
    for (let i = 1; i < matrix.length; i++) {
      if (matrix[i][0] === 0) {
        firstColIsZero = true;
        break;
      }
    }
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0) {
        firstRowIsZero = true;
        break;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (firstColIsZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstRowIsZero) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }
}
