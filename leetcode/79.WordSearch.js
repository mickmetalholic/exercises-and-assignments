/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const rowCount = board.length;
  const colCount = board[0].length;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (_search(i, j, 0)) return true;
    }
  }
  return false;

  function _search(row, col, d) {
    if (d === word.length) return true;
    if (row < 0 || row >= rowCount || col < 0 || col >= colCount) return false;
    if (board[row][col] !== word[d]) return false;
    const c = board[row][col];
    board[row][col] = 0;
    const res = _search(row + 1, col, d + 1)
      || _search(row - 1, col, d + 1)
      || _search(row, col + 1, d + 1)
      || _search(row, col - 1, d + 1);
    board[row][col] = c;
    return res;
  }
}

console.log(exist([
  ["C","A","A"],
  ["A","A","A"],
  ["B","C","D"]
], "AAB"));
