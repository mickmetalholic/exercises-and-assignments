/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function gameOfLife(board) {
  if (board.length === 0) return;

  const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // 1->0: 2
  // 1->1: 3
  // 0->0: -1
  // 0->1: -2
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let count = 0;
      for (const [di, dj] of neighbors) {
        if (
          i + di >= 0 && i + di < board.length && j + dj >= 0 && j + dj < board[0].length
          && board[i + di][j + dj] > 0
        ) {
          count++;
        }
      }
      if (board[i][j] === 0) {
        if (count === 3) {
          board[i][j] = -2;
        } else {
          board[i][j] = -1;
        }
      } else {
        if (count === 2 || count === 3) {
          board[i][j] = 3;
        } else {
          board[i][j] = 2;
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = (board[i][j] === 3 || board[i][j] === -2) ? 1 : 0;
    }
  }
}
