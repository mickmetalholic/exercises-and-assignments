/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @return: The maximum size
 */
function backPack(m, A) {
  // dp[i] := the maximum size of a backpack with size i
  const dp = new Array(m + 1).fill(0);

  for (const size of A) {
    for (let i = m; i >= 1; i--) {
      if (size <= i) {
        dp[i] = Math.max(dp[i], dp[i - size] + size);
      }
    }
  }

  return dp[m];
}
