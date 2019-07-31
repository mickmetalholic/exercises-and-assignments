/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function longestSubstring(s, k) {
  const count = {};
  for (const c of s) {
    count[c] = count[c] || 0;
    count[c]++;
  }
  let res = 0, lastIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (count[c] < k) {
      if (i > lastIndex) {
        res = Math.max(res, longestSubstring(s.slice(lastIndex, i), k));
      }
      lastIndex = i + 1;
    }
  }
  if (lastIndex === 0) {
    return s.length;
  } else {
    return Math.max(res, longestSubstring(s.slice(lastIndex, s.length), k))
  }
}
