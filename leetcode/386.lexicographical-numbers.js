/*
 * @lc app=leetcode id=386 lang=javascript
 *
 * [386] Lexicographical Numbers
 */
/**
 * @param {number} n
 * @return {number[]}
 */
function lexicalOrder(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
    .sort();
}
