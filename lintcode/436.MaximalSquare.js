/**
 * @param matrix: a matrix of 0 and 1
 * @return: an integer
 */
function maxSquare(matrix) {
  const size = Array.from({ length: matrix.length }, _ => new Array(matrix[0].length).fill(0));
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || j === 0) {
        size[i][j] = matrix[i][j];
      } else if (matrix[i][j] === 0) {
        size[i][j] = 0;
      } else {
        size[i][j] = Math.min(size[i - 1][j - 1], size[i - 1][j], size[i][j - 1]) + 1;
      }
      res = Math.max(res, size[i][j]);
    }
  }
  return res * res;
}
