/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 */
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function findMaxForm(strs, m, n) {
  // dp[i][j][k] := the maximum number of strings that use j 0s and k 1s can
  // form from 0~ith of `strs`.
  const dp = Array.from({ length: m + 1 }, _ => new Array(n + 1));

  let res = 0;
  for (let i = 0; i < strs.length; i++) {
    const counts = [0, 0];
    for (const c of strs[i]) {
      if (c === '0') {
        counts[0]++;
      } else {
        counts[1]++;
      }
    }
    for (let j = m; j >= 0; j--) {
      for (let k = n; k >= 0; k--) {
        if (j - counts[0] >= 0 && k - counts[1] >= 0) {
          if (i === 0) {
            dp[j][k] = 1;
          } else {
            dp[j][k] = Math.max(dp[j][k], dp[j - counts[0]][k - counts[1]] + 1);
          }
        } else {
          if (i === 0) {
            dp[j][k] = 0;
          } else {
            dp[j][k] = dp[j][k];
          }
        }
      }
    }
    res = Math.max(res, dp[m][n]);
  }
  return res;
}
