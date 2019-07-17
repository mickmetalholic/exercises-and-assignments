/**
 * @param A: A string
 * @param B: A string
 * @return: The length of longest common subsequence of A and B
 */
function longestCommonSubsequence(A, B) {
  if (A.length === 0 || B.length === 0) return 0;

  // dp[i][j] := the LCS of A[0...i] and B[0...j]
  const dp = Array.from({ length: A.length }, _ => new Array(B.length));

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = A[i] === B[j] ? 1 : 0;
      } else if (i === 0) {
        dp[i][j] = A[i] === B[j] ? 1 : dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = A[i] === B[j] ? 1 : dp[i - 1][j];
      } else {
        dp[i][j] = A[i] === B[j] ? (dp[i - 1][j - 1] + 1) : Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[A.length - 1][B.length - 1];
}
