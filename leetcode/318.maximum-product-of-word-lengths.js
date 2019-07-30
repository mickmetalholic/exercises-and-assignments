/*
 * @lc app=leetcode id=318 lang=javascript
 *
 * [318] Maximum Product of Word Lengths
 */
/**
 * @param {string[]} words
 * @return {number}
 */
function maxProduct(words) {
  const A = 'a'.charCodeAt(0);
  const masks = words.map(word => {
    let mask = 0;
    for (const c of word) {
      mask |= (1 << (c.charCodeAt(0) - A));
    }
    return mask;
  });

  let res = 0;
  for (let i = 0; i < masks.length; i++) {
    for (let j = i + 1; j < masks.length; j++) {
      if ((masks[i] & masks[j]) === 0)
      res = Math.max(res, words[i].length * words[j].length);
    }
  }
  return res;
}
