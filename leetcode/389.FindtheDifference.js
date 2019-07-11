/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
  const map = {};
  for (const ch of s) {
    map[ch] = map[ch] || 0;
    map[ch]++;
  }
  for (const ch of t) {
    if (!map.hasOwnProperty(ch) || map[ch] === 0) {
      return ch;
    } else {
      map[ch]--;
    }
  }
}
