/*
 * @lc app=leetcode id=792 lang=javascript
 *
 * [792] Number of Matching Subsequences
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
function numMatchingSubseq(S, words) {
  const subsequences = new Set();
  const pos = {};
  for (let i = 0; i < S.length; i++) {
    const ch = S[i];
    pos[ch] = pos[ch] || [];
    pos[ch].push(i);
  }

  return words.filter(word => {
    if (words.length > S.length) return false;
    if (subsequences.has(word)) return true;
    if (isSubseq(S, pos, word)) {
      subsequences.add(word);
      return true;
    } else {
      return false;
    }
  }).length;
}

/**
 * check if word is subsequence of string s
 * @param {string} s string
 * @param {string} word word
 */
function isSubseq(s, pos, word) {
  let prev = 0;
  for (const ch of word) {
    if (prev >= s.length) return false;
    const positions = pos[ch];
    if (!Array.isArray(positions) || positions.length === 0) return false;
    prev = positions.find(e => e >= prev);
    if (prev === undefined) return false;
    prev++;
  }
  return true;
}
// @lc code=end
