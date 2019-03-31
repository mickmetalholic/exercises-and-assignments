/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  const dp = [];
  dp[0] = new Array(p.length + 1).fill(false);

  // '' matches ''
  dp[0][0] = true;
  // i is patter string length
  for (let i = 2; i <= p.length; i++) {
    if (i % 2 === 0 && p[i - 1] === '*') {
      dp[0][i] = dp[0][i - 2];
    }
  }

  // i is string length
  // j is pattern string length
  for (let i = 1; i <= s.length; i++) {
    dp[i] = dp[i] || new Array(p.length + 1).fill(false);
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i][j - 1] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[s.length][p.length];
}
