/**
 * @param {number} N
 * @return {number}
 */
function numTilings(N) {
  const dp = [];
  dp[0] = [0, 0, 0];
  dp[1] = [1, 0, 0];
  dp[2] = [2, 1, 1];
  if (N <= 2) return dp[N][0];

  const MOD = Math.pow(10, 9) + 7;
  for (let i = 3; i <= N; i++) {
    dp[i] = [];;
    dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD;
    dp[i][1] = (dp[i - 1][2] + dp[i - 2][0]) % MOD;
    dp[i][2] = (dp[i - 1][1] + dp[i - 2][0]) % MOD;
  }

  return dp[N][0];
}
