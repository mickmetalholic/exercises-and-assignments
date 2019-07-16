/*
 * @lc app=leetcode id=890 lang=javascript
 *
 * [890] Find and Replace Pattern
 */
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function findAndReplacePattern(words, pattern) {
  return words.filter(word => {
    if (word.length !== pattern.length) return false;
    const wordToPattern = {}, patternToWord = {};
    for (let i = 0; i < word.length; i++) {
      const w = word[i], p = pattern[i];
      if (
        wordToPattern.hasOwnProperty(w)
        && patternToWord.hasOwnProperty(p)
        && wordToPattern[w] === p
        && patternToWord[p] === w
      ) {
      } else if (
        !wordToPattern.hasOwnProperty(w)
        && !patternToWord.hasOwnProperty(p)
      ) {
        wordToPattern[w] = p;
        patternToWord[p] = w;
      } else {
        return false;
      }
    }
    return true;
  });
}
