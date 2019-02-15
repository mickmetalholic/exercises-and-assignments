/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  let start = 0, end = matrix.length - 1;

  while (start < end) {
    const tmp = [];
    // cache top
    for (let i = start; i < end; i++) {
      tmp[i] = matrix[start][i];
    }
    // left -> top
    for (let i = start; i < end; i++) {
      matrix[start][i] = matrix[end + start - i][start];
    }
    // bottom -> left
    for (let i = start + 1; i <= end; i++) {
      matrix[i][start] = matrix[end][i];
    }
    // right -> bottom
    for (let i = start + 1; i <= end; i++) {
      matrix[end][i] = matrix[start + end - i][end];
    }
    // cache(top) -> right
    for (let i = start; i < end; i++) {
      matrix[i][end] = tmp[i];
    }
    start++;
    end--;
  }
}
