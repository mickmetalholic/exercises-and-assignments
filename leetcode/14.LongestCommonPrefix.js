/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (strs.length === 0) return '';
  let prefix = '';
  let hasPrefix = true;
  let ch = '';
  while (hasPrefix) {
    prefix += ch;
    const length = prefix.length;
    hasPrefix = strs.every((str, i) => {
      if (i === 0) {
        ch = str[length];
        return true;
      } else {
        return ch === str[length];
      }
    });
    if (!ch) break;
  }
  return prefix;
};