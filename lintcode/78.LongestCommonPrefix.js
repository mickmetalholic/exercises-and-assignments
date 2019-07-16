/**
 * @param strs: A list of strings
 * @return: The longest common prefix
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';

  const first = strs[0];
  let length = first.length;
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    let l = 0;
    while (l < length && str[l] === first[l]) {
      l++;
    }
    length = Math.min(length, l);
  }
  return first.slice(0, length);
}
