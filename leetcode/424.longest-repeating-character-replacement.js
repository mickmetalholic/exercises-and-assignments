/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  const chars = {};
  let left = 0, maxCount = 0, res = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    chars[c] = chars[c] || 0;
    chars[c]++;
    // maxCount := the maximum number of the most frequent
    // character inside a window, ever
    maxCount = Math.max(maxCount, chars[c]);
    // the window's width cannot exceed maxCount + k,
    // so every time the right edge increases by 1,
    // we need to check if the window's width
    // exceeds the upper limit
    if (i - left + 1 > k + maxCount) {
      chars[s[left]]--;
      left++;
    }
    // only if maxCount get larger, res can get larger
    res = Math.max(res, i - left + 1);
  }
  return res;
}
