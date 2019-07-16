/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let res = 0, begin = 0;
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (set.has(c)) {
      while (s[begin] !== c) {
        set.delete(s[begin]);
        begin++;
      }
      begin++;
    } else {
      set.add(c);
      res = Math.max(res, i - begin + 1);
    }
  }
  return res;
}
