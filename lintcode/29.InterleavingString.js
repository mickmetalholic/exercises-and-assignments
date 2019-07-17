/**
 * @param s1: A string
 * @param s2: A string
 * @param s3: A string
 * @return: Determine whether s3 is formed by interleaving of s1 and s2
 */
function isInterleave(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  if ((s1.length === 0 && s2 === s3) || (s2.length === 0 && s1 === s3)) return true;

  // dp[i][j]: s1[0, i - 1] and s2[0, j - 1] are able to form s3[0, i + j - 1]
  const dp = Array.from({ length: s1.length + 1 }, _ => new Array(s2.length + 1));

  dp[0][0] = true;
  // j === 0
  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }
  // i === 0
  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1])
        || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }

  return dp[s1.length][s2.length];
}
