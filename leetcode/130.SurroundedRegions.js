/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  if (board.length === 0 || board[0].length === 0) return;

  const row = board.length;
  const col = board[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const res = [], visited = new Set();
      if (dfs(i, j, res, visited)) {
        for (let [i, j] of res) {
          board[i][j] = 'X';
        }
      }
    }
  }

  function dfs(i, j, res, visited) {
    if (visited.has(`${i}-${j}`)) return true;
    visited.add(`${i}-${j}`);

    if (board[i][j] === 'X') {
      return true;
    } else if (
      i === 0
      || i === row - 1
      || j === 0
      || j === col - 1
    ) {
      return false;
    } else {
      if (
        dfs(i + 1, j, res, visited)
        && dfs(i - 1, j, res, visited)
        && dfs(i, j + 1, res, visited)
        && dfs(i, j - 1, res, visited)
      ) {
        res.push([i, j]);
        return true;
      } else {
        return false;
      }
    }
  }
}
