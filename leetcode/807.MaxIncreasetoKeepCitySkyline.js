/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = grid => {
  const rowMax = grid.map(row => Math.max(...row));
  const colMax = grid.reduce(
    (colMax, col) => colMax.map((max, i) => Math.max(max, col[i]))
  );
  let res = 0;
  for (let row = 0; row < rowMax.length; row++) {
    for (let col = 0; col < colMax.length; col++) {
      res += Math.min(rowMax[row], colMax[col]) - grid[row][col];
    }
  }
  return res;
};
