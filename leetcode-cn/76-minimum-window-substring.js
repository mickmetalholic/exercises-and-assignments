/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (s.length < t.length) {
    return '';
  }

  const tMap = {};
  for (const c of t) {
    tMap[c] = tMap[c] || 0;
    tMap[c]++;
  }

  let res = '', count = t.length, left = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (tMap.hasOwnProperty(char)) {
      if (tMap[char]-- > 0) count--;
      while (count === 0) {
        if (res === '' || res.length > i + 1 - left) {
          res = s.slice(left, i + 1);
        }
        const leftC = s[left];
        if (tMap.hasOwnProperty(leftC)) {
          tMap[leftC]++;
          if (tMap[leftC] === 1) count++;
        }
        left++;
      }
    }
  }

  return res;
}
