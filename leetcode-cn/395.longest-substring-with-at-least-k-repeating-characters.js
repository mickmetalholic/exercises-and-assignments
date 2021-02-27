/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function longestSubstring(s, k) {
  if (s.length === 0) {
    return 0;
  }

  const count = {};
  for (const c of s) {
    count[c] = count[c] || 0;
    count[c]++;
  }

  let res = 0;
  let startIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (count[c] < k) {
      res = Math.max(res, longestSubstring(s.slice(startIndex, i), k));
      startIndex = i + 1;
    }
  }

  if (startIndex === 0) {
    return s.length;
  } else {
    return Math.max(res, longestSubstring(s.slice(startIndex), k));
  }
}
