/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const rowRes = board.every(_noRepetition);
  if (!rowRes) return false;
  for (let i = 0; i < board[0].length; i++) {
    const arr = [];
    for (let j = 0; j < board.length; j++) {
      arr.push(board[j][i]);
    }
    if (!_noRepetition(arr)) {
      return false;
    }
  }
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board[0].length; j += 3) {
      const arr = [
        board[i][j], board[i + 1][j], board[i + 2][j],
        board[i][j + 1], board[i + 1][j + 1], board[i + 2][j + 1],
        board[i][j + 2], board[i + 1][j + 2], board[i + 2][j + 2]
      ];
      if (!_noRepetition(arr)) {
        return false;
      }
    }
  }
  return true;

  function _noRepetition(arr) {
    const set = new Set();
    return arr.every(e => {
      if (e === '.') return true;
      if (set.has(e)) return false;
      set.add(e);
      return true;
    });
  }
}
