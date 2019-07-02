/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = {};
  for (const ch of s) {
    map[ch] = map[ch] || 0;
    map[ch]++;
  }

  for (const ch of t) {
    if (!map[ch] || map[ch] === 0) {
      return false;
    } else {
      map[ch]--;
    }
  }
  return true;
}
