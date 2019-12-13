/*
 * @lc app=leetcode id=524 lang=javascript
 *
 * [524] Longest Word in Dictionary through Deleting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
function findLongestWord(s, d) {
  const strs = d
    .filter(str => str.length <= s.length)
    .sort((a, b) => {
      if (a.length > b.length) {
        return -1;
      } else if (a.length < b.length) {
        return 1;
      } else {
        return a > b ? 1 : -1;
      }
    });

  for (const str of strs) {
    let j = 0;
    // iterate s
    for (let i = 0; i < s.length; i++) {
      if (s[i] === str[j]) {
        j++;
      }
      if (j === str.length) return str;
    }
  }

  return '';
}
// @lc code=end
