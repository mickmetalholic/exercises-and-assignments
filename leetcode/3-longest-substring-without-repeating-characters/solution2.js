/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const charToIndex = {};
  let res = 0, start = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (charToIndex.hasOwnProperty(c)) {
      start = Math.max(start, charToIndex[c] + 1);
    }
    res = Math.max(res, i - start + 1);
    charToIndex[c] = i;
  }
  return res;
}
