/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let start = 0, maxLength = 0;
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch in hash && hash[ch] >= start) {
      maxLength = Math.max(maxLength, i - start);
      start = hash[ch] + 1;
    }
    hash[ch] = i;
  }
  maxLength = Math.max(maxLength, s.length - start);
  return maxLength;
};
