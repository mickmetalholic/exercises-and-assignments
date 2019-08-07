/*
 * @lc app=leetcode id=467 lang=javascript
 *
 * [467] Unique Substrings in Wraparound String
 */
/**
 * @param {string} p
 * @return {number}
 */
function findSubstringInWraproundString(p) {
  if (p.length === 0) return 0;
  // to find how many unique substrings ends with character `c`, we just
  // need to find the longest length of substring that ends with `c`

  // dp[c] := the number(also the length) of substrings that end with
  // character c and are substrings of s
  const dp = {};
  dp[p[0]] = 1;
  let prevLen = 1;
  for (let i = 1; i < p.length; i++) {
    const prev = p[i - 1], cur = p[i];
    dp[cur] = dp[cur] || 0;
    dp[prev] = dp[prev] || 0;
    if (
      prev.charCodeAt(0) + 1 === cur.charCodeAt(0)
      || (prev === 'z' && cur === 'a')
    ) {
      prevLen++;
    } else {
      prevLen = 1;
    }
    dp[cur] = Math.max(dp[cur], prevLen);
  }

  let count = 0;
  for (const c of Object.values(dp)) {
    count += c;
  }
  return count;
}
