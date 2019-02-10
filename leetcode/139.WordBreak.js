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
      let newS = s;
      while (newS.startsWith(word)) {
        newS = newS.replace(word, '');
      }
      if (s !== newS && _wordBreak(newS)) return res[s] = true;
    }
    return res[s] = false;
  }
}
