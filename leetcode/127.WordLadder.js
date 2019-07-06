/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) return 0;

  const g = {};
  for (let i = 0; i < wordList.length; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      if (isConnected(wordList[i], wordList[j])) {
        g[wordList[i]] = g[wordList[i]] || [];
        g[wordList[i]].push(wordList[j]);
        g[wordList[j]] = g[wordList[j]] || [];
        g[wordList[j]].push(wordList[i]);
      }
    }
  }

  let cur = wordList.filter(word => isConnected(beginWord, word)), next = new Set(), res = 1;
  const visited = new Set();
  while (cur.length) {
    res++;
    for (let i = 0; i < cur.length; i++) {
      const word = cur[i];
      if (word === endWord) {
        return res;
      }
      visited.add(word);
      const neighbors = g[word] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          next.add(neighbor);
        }
      }
    }
    cur = [...next];
    next = new Set();
  }
  return 0;

  function isConnected(word1, word2) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      count += (word1[i] === word2[i] ? 0 : 1);
      if (count === 2) {
        return false;
      }
    }
    return true;
  }
}
