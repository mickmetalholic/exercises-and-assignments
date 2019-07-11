/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  const map = {};
  for (const ch of s) {
    map[ch] = map[ch] || 0;
    map[ch]++;
  }

  let length = 0, hasSingle = false;
  for (const [_, val] of Object.entries(map)) {
    length += Math.floor(val / 2) * 2;
    if (val % 2) {
      hasSingle = true;
    }
  }
  return length + (hasSingle ? 1 : 0);
}
