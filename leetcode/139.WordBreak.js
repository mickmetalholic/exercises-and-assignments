/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const res = {};
  return _wordBreak(s);

  function _wordBreak(s) {
    if (res[s] || s.length === 0) return true;
    if (res[s] === false) return false;

    for (const word of wordDict) {
      if (word === s) {
        return res[s] = true;
      } else if (s.startsWith(word)) {
        if (_wordBreak(s.replace(word, ''))) return res[s] = true;
      }
    }
    return res[s] = false;
  }
}
