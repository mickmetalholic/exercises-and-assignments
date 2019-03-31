/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if (!grid || !grid.length) return 0;

  const rowCount = grid.length;
  const colCount = grid[0].length;

  let res = 0;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (grid[i][j] === '1') {
        _search(i, j);
        res++;
      }
    }
  }
  return res;

  function _search(i, j) {
    if (grid[i][j] === '1') {
      grid[i][j] = '0';
      if (i - 1 >= 0) {
        _search(i - 1, j);
      }
      if (i + 1 < rowCount) {
        _search(i + 1, j);
      }
      if (j - 1 >= 0) {
        _search(i, j - 1);
      }
      if (j + 1 < colCount) {
        _search(i, j + 1);
      }
    }
  }
}
