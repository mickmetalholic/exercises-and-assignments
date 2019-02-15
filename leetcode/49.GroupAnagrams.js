/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const hash = {};
  strs.forEach(str => {
    const key = str.split('').sort().join('');
    if (!hash[key]) {
      hash[key] = [];
    }
    hash[key].push(str);
  });
  return Object.values(hash);
}
