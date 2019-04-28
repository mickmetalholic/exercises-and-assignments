/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  const m = matrix.length;
  if (m === 0) return false;
  const n = matrix[0].length;

  let i = 0, j = n - 1;
  while (i < m && j >= 0) {
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
