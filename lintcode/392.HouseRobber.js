/**
 * @param A: An array of non-negative integers
 * @return: The maximum amount of money you can rob tonight
 */
function houseRobber(A) {
  if (A.length === 0) return 0;

  // dp[i] := the amount of money can rob for most with robbing A[i]
  const dp = [];
  dp[0] = A[0];
  dp[1] = A[1];
  dp[2] = A[0] + A[2];
  if (A.length <= 3) return Math.max(...dp.slice(0, A.length));

  let max = Math.max(...dp);
  for (let i = 3; i < A.length; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + A[i];
    max = Math.max(max, dp[i]);
  }
  return max;
}
