/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  const mapS = new Map(), mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i]) || mapT.has(t[i])) {
      if (
        (mapS.get(s[i]) !== t[i])
        || (mapT.get(t[i] !== s[i]))
      ) {
        return false;
      }
    } else {
      mapS.set(s[i], t[i]);
      mapT.set(t[i], s[i]);
    }
  }
  return true;
}
