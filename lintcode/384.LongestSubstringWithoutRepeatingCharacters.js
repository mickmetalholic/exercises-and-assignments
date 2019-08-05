/**
 * @param {string} s: a string
 * @return: an integer
 */
function lengthOfLongestSubstring(s) {
  const charMaxIndices = {};
  let res = 0, left = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (charMaxIndices.hasOwnProperty(c)) {
      res = Math.max(res, i - left);
      left = Math.max(left, charMaxIndices[c] + 1);
    }
    charMaxIndices[c] = i;
  }
  res = Math.max(res, s.length - left);
  return res;
}
