/*
 * @lc app=leetcode id=678 lang=javascript
 *
 * [678] Valid Parenthesis String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
  if (s.length === 0) return true;

  const isValid = Array.from({ length: s.length }, _ => new Array(s.length).fill(false));

  for (let i = 0; i < s.length; i++) {
    isValid[i][i] = s[i] === '*';
    if (i < s.length - 1) {
      isValid[i][i + 1] = (s[i] === '*' || s[i] === '(') && (s[i + 1] === '*' || s[i + 1] === ')');
    }
  }

  for (let i = s.length - 3; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      if (s[i] === '*' && isValid[i + 1][j]) {
        isValid[i][j] = true;
      } else if (s[i] === '*' || s[i] === '(') {
        if (
          (isValid[i][i + 1] && isValid[i + 2][j])
          || ((s[j] === ')' || s[j] === '*') && isValid[i + 1][j - 1])
        ) {
          isValid[i][j] = true;
        } else {
          for (let k = i + 2; k <= j - 1; k++) {
            if (
              (s[k] === '*' || s[k] === ')')
              && isValid[i + 1][k - 1]
              && isValid[k + 1][j]
            ) {
              isValid[i][j] = true;
              break;
            }
          }
        }
      }
    }
  }

  return isValid[0][s.length - 1];
}
// @lc code=end
