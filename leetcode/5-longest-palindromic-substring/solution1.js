/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const str = `#${s.split('').join('#')}#`;
  const radii = new Array(str.length);
  let right = 0, pivot = 0, maxIndex, maxRadius = 0;
  for (let i = 0; i < str.length; i++) {
    let r = i >= right ? 1 : Math.min(right - i + 1, radii[2 * pivot - i]);
    while (i - r >= 0 && i + r <= str.length && str[i - r] === str[i + r]) {
      r++;
    }
    if (i + r - 1 > right) {
      right = i + r - 1;
      pivot = i;
    }
    radii[i] = r;
    if (r > maxRadius) {
      maxIndex = i;
      maxRadius = r;
    }
  }
  return str.slice(maxIndex - maxRadius + 1, maxIndex + maxRadius).split('#').join('');
}
