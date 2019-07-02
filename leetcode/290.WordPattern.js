/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
function wordPattern(pattern, str) {
  const words = str.split(' ');

  if (pattern.length !== words.length) return false;

  const map = {}, revMap = {};
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    const word = words[i];
    if (
      (map.hasOwnProperty(c) && map[c] !== word)
      || (revMap.hasOwnProperty(word) && revMap[word] !== c)
    ) {
      return false;
    } else {
      map[c] = word;
      revMap[word] = c;
    }
  }
  return true;
}
