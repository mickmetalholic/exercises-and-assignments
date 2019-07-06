/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function pacificAtlantic(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  const row = matrix.length, col = matrix[0].length;

  const flow = Array.from({ length: row }, _ => Array.from({ length: col }, _ => ({ p: null, a: null })));

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const res = [];
  pacificFlow();
  atlanticFlow();
  return res;

  function pacificFlow() {
    let curLevel = [], nextLevel = [];
    flow[0][0].p = true;
    for (let i = 1; i < row; i++) {
      curLevel.push([i, 0]);
      flow[i][0].p = true;
    }
    for (let j = 1; j < col; j++) {
      curLevel.push([0, j]);
      flow[0][j].p = true;
    }

    while (curLevel.length) {
      for (const [i, j] of curLevel) {
        for (const [y, x] of directions) {
          if (
            i + y >= 0
            && i + y < row
            && j + x >= 0
            && j + x < col
            && !flow[i + y][j + x].p
          ) {
            if (matrix[i][j] <= matrix[i + y][j + x]) {
              flow[i + y][j + x].p = true;
              nextLevel.push([i + y, j + x]);
            }
          }
        }
      }
      curLevel = nextLevel;
      nextLevel = [];
    }
  }

  function atlanticFlow() {
    let curLevel = [], nextLevel = [];
    flow[row - 1][col - 1].a = true;
    if (flow[row - 1][col - 1].p) {
      res.push([row - 1, col - 1]);
    }
    for (let i = 0; i < row - 1; i++) {
      curLevel.push([i, col - 1]);
      flow[i][col - 1].a = true;
      if (flow[i][col - 1].p) {
        res.push([i, col - 1]);
      }
    }
    for (let j = 0; j < col - 1; j++) {
      curLevel.push([row - 1, j]);
      flow[row - 1][j].a = true;
      if (flow[row - 1][j].p) {
        res.push([row - 1, j]);
      }
    }

    while (curLevel.length) {
      for (const [i, j] of curLevel) {
        for (const [y, x] of directions) {
          if (
            i + y >= 0
            && i + y < row
            && j + x >= 0
            && j + x < col
            && !flow[i + y][j + x].a
          ) {
            if (matrix[i][j] <= matrix[i + y][j + x]) {
              flow[i + y][j + x].a = true;
              nextLevel.push([i + y, j + x]);
              if (flow[i + y][j + x].p) {
                res.push([i + y, j + x]);
              }
            }
          }
        }
      }
      curLevel = nextLevel;
      nextLevel = [];
    }
  }
}
