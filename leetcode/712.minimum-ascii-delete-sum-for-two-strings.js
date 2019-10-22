/*
 * @lc app=leetcode id=712 lang=javascript
 *
 * [712] Minimum ASCII Delete Sum for Two Strings
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
function minimumDeleteSum(s1, s2) {
  const sum = Array.from({ length: s1.length + 1 }, _ => new Array(s2.length + 1));

  sum[0][0] = 0;
  // i === 0
  for (let j = 1; j <= s2.length; j++) {
    sum[0][j] = sum[0][j - 1] + s2.charCodeAt(j - 1);
  }
  // j === 0
  for (let i = 1; i <= s1.length; i++) {
    sum[i][0] = sum[i - 1][0] + s1.charCodeAt(i - 1);
  }
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        sum[i][j] = sum[i - 1][j - 1];
      } else {
        sum[i][j] = Math.min(sum[i - 1][j] + s1.charCodeAt(i - 1), sum[i][j - 1] + s2.charCodeAt(j - 1));
      }
    }
  }

  return sum[s1.length][s2.length];
}
// @lc code=end
