/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  if (!grid || !grid.length) return 0;

  const rowCount = grid.length;
  const colCount = grid[0].length;

  let maxArea = 0;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      maxArea = Math.max(_searchArea(i, j), maxArea);
    }
  }
  return maxArea;

  function _searchArea(i, j) {
    if (
      i >= 0
      && i < rowCount
      && j >= 0
      && j < colCount
      && grid[i][j]
    ) {
      grid[i][j] = 0;
      return 1 + _searchArea(i - 1, j)
        + _searchArea(i + 1, j)
        + _searchArea(i, j - 1)
        + _searchArea(i, j + 1);
    } else {
      return 0;
    }
  }
}
