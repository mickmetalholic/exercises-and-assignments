/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  const row = matrix.length, col = matrix[0].length;
  const maxLevel = Math.floor((Math.min(row, col) + 1) / 2);
  const res = [];
  for (let level = 0; level < maxLevel; level++) {
    const levelRow = row - level * 2, levelCol = col - level * 2;
    let i = level, j = level;
    if (levelRow === 1) {
      for (; j < level + levelCol; j++) {
        res.push(matrix[i][j]);
      }
    } else if (levelCol === 1) {
      for (; i < level + levelRow; i++) {
        res.push(matrix[i][j]);
      }
    } else {
      for (; j < level + levelCol; j++) {
        res.push(matrix[i][j]);
      }
      j--;
      i++;
      for (; i < level + levelRow; i++) {
        res.push(matrix[i][j]);
      }
      i--;
      j--;
      for (; j >= level; j--) {
        res.push(matrix[i][j]);
      }
      j++;
      i--;
      for (; i > level; i--) {
        res.push(matrix[i][j]);
      }
    }
  }
  return res;
}
  