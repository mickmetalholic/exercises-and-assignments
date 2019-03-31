/**
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
  const ids = [], areas = [];

  let id = 0;
  areas[id] = 0;

  for (let i = 0; i < grid.length; i++) {
    ids[i]  = ids[i] || [];
    for (let j = 0; j < grid[i].length; j++) {
      if (ids[i][j] === undefined && grid[i][j] === 1) {
        id++;
        areas[id] = 0;
        _search(i, j);
      } else if (grid[i][j] === 0) {
        ids[i][j] = 0;
      }
    }
  }

  let maxArea = Math.max(...areas);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        let curArea = 1;
        const connectedAreas = new Set();
        if (i - 1 >= 0) connectedAreas.add(ids[i - 1][j]);
        if (i + 1 < grid.length) connectedAreas.add(ids[i + 1][j]);
        if (j - 1 >= 0) connectedAreas.add(ids[i][j - 1]);
        if (j + 1 < grid[0].length) connectedAreas.add(ids[i][j + 1]);
        for (const id of connectedAreas) {
          curArea += areas[id];
        }
        maxArea = Math.max(maxArea, curArea);
      }
    }
  }

  return maxArea;

  function _search(i, j) {
    if (ids[i] && ids[i][j] !== undefined) return;

    areas[id]++;
    ids[i] = ids[i] || [];
    ids[i][j] = id;
    if (i - 1 >= 0 && grid[i - 1][j] === 1) _search(i - 1, j);
    if (i + 1 < grid.length && grid[i + 1][j] === 1) _search(i + 1, j);
    if (j - 1 >= 0 && grid[i][j - 1] === 1) _search(i, j - 1);
    if (j + 1 < grid[0].length && grid[i][j + 1] === 1) _search(i, j + 1);
  }
}
