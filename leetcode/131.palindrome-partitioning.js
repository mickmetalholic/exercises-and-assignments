/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  const res = [];
  dfs(s, [], 0);
  return res;

  function dfs(str, path, len) {
    if (str.length === 0 && len === s.length) {
      res.push(path.slice());
    } else {
      for (let i = 1; i <= str.length; i++) {
        const sub = str.slice(0, i);
        if (_isPalindrome(sub)) {
          dfs(str.slice(i), path.concat(sub), len + i);
        }
      }
    }
  }

  function _isPalindrome(str) {
    let i = 0;
    while (i <= Math.floor(str.length - 2)) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
      i++;
    }
    return true;
  }
}
