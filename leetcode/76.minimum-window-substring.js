/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const letters = t.split('').reduce((acc, e) => {
    acc[e] = acc[e] || 0;
    acc[e]++;
    return acc;
  }, {});

  let left = 0, cnt = 0, res = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    letters[c] = letters[c] || 0;
    letters[c]--;
    if (letters[c] >= 0) cnt++;
    while (cnt === t.length) {
      if (res === '' || i - left + 1 < res.length) {
        res = s.slice(left, i + 1);
      }
      letters[s[left]]++;
      if (letters[s[left]] > 0) cnt--;
      left++;
    }
  }
  return res;
}
// @lc code=end
