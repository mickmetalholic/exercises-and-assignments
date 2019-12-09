/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const res = [];
  place(0, []);
  return res.map(r => {
    const output = Array.from({ length: n }, _ => new Array(n).fill('.'));
    for (const [i, j] of r) {
      output[i][j] = 'Q';
    }
    return output.map(row => row.join(''));
  });

  function place(curRow, curRes) {
    if (curRow === n) {
      res.push(curRes);
      return;
    }
    // col
    for (let j = 0; j < n; j++) {
      const isValid = curRes.every(([row, col]) =>
        col !== j && curRow - row !== Math.abs(col - j));
      if (isValid) {
        const nextRes = curRes.slice();
        nextRes.push([curRow, j]);
        place(curRow + 1, nextRes);
      }
    }
  }
}
