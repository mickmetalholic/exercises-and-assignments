/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
  // if s.slice(i, j + 1) is palindromic string, dp[i][j] = true
  const dp = Array(s.length);

  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = Array(s.length).fill(false);
    for (let j = 0; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = true;
      } else if (i + 1 === j) {
        dp[i][j] = s[i] === s[j];
      } else if (i < j) {
        dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      }
      if (dp[i][j]) res++;
    }
  }

  return res;
}
