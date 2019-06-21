/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  if (s.length === 0) return 0;

  const dp = [];
  dp[0] = s[0] === '0' ? 0 : 1;
  for (let i = 1; i < s.length; i++) {
    dp[i] = 0;
    if (s[i] !== '0') {
      dp[i] += dp[i - 1];
    }
    if (
      s[i - 1] === '1'
      || (s[i - 1] === '2' && Number(s[i]) <= 6)
    ) {
      dp[i] += (i >= 2 ? dp[i - 2] : 1);
    }
  }
  return dp[s.length - 1];
}
