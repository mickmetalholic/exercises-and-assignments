/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(board, words) {
  const trie = {
    children: {},
    isWord: false,
  };

  for (let word of words) {
    let node = trie;
    for (let char of word) {
      node.children[char] = node.children[char] || {
        children: {},
        isWord: false,
      };
      node = node.children[char];
    }
    node.isWord = true;
  }

  const rowCount = board.length;
  const colCount = board[0].length;
  const visited = Array.from({ length: rowCount }, _ => new Array(colCount).fill(false));
  const set = new Set();
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      dfs(i, j, trie, '');
    }
  }
  return [...set];

  function dfs(i, j, node, word) {
    if (i < 0 || i >= rowCount || j < 0 || j >= colCount) return;
    if (visited[i][j]) return;

    const char = board[i][j];
    const next = node.children[char];
    if (!next) return;

    const curWord = `${word}${char}`;
    if (next.isWord) {
      set.add(curWord);
    }

    visited[i][j] = true;
    dfs(i - 1, j, next, curWord);
    dfs(i + 1, j, next, curWord);
    dfs(i, j + 1, next, curWord);
    dfs(i, j - 1, next, curWord);
    visited[i][j] = false;
  }
}
