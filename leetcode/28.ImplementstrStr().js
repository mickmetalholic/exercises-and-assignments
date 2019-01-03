/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;
  const next = [0];
  for (let i = 1; i < needle.length; i++) {
    let k = next[i - 1];
    if (needle[i] === needle[k]) {
      next[i] = next[i - 1] + 1;
    } else {
      while (k > 0 && needle[k] !== needle[i]) {
        k = next[k - 1];
      }
      next[i] = k + (needle[k] === needle[i] ? 1 : 0);
    }
  }

  let i = 0, j = 0, start = 0;
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else if (j === 0) {
      i++;
      start = i;
    } else {
      j = next[j - 1];
      start = i - j;
    }
  }
  return j === needle.length ? start : -1;
};
