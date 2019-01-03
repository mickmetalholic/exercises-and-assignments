/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const str = `#${s.split('').join('#')}#`;
  let pivot = 0, right = 0, r = [], maxLength = 0, maxIndex = -1;
  for (let i = 0; i < str.length; i++) {
    let j = i < right ? Math.min(r[2 * pivot - i], right - i) : 1;
    while (
      i - j >= 0
      && i + j < str.length
      && str[i - j] === str[i + j]
    ) {
      j++;
    }
    r[i] = j;
    if (i + j - 1 > right) {
      right = i + j - 1;
      pivot = i;
    }
    if (r[i] - 1 > maxLength) {
      maxLength = r[i] - 1;
      maxIndex = i;
    }
  }
  return str
    .slice(maxIndex - r[maxIndex] + 1, maxIndex + r[maxIndex])
    .split('#')
    .join('');
};
