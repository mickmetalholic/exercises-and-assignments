/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const dp = Array.from({ length: s.length }, _ => new Array(s.length));

  let left = 0, right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = true;
      } else if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else if (i + 1 === j) {
        dp[i][j] = true;
      } else {
        dp[i][j] = dp[i + 1][j - 1];
      }
      if (dp[i][j] && j - i > right - left) {
        left = i;
        right = j;
      }
    }
  }

  return s.slice(left, right + 1);
}
