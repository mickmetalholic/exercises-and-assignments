/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  const col = matrix[0].length;
  const row = matrix.length;

  let i = 0, j = col - 1;
  while (i < row && j >= 0) {
    if (matrix[i][j] > target) {
      j--;
    } else if (matrix[i][j] < target) {
      i++;
    } else {
      return true;
    }
  }
  return false;
}
