/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const ransomLetters = {};
  for (const letter of ransomNote) {
    ransomLetters[letter] = ransomLetters[letter] || 0;
    ransomLetters[letter]++;
  }

  const magazineLetters = {};
  for (const letter of magazine) {
    magazineLetters[letter] = magazineLetters[letter] || 0;
    magazineLetters[letter]++;
  }

  for (const [letter, count] of Object.entries(ransomLetters)) {
    if (
      !magazineLetters[letter]
      || magazineLetters[letter] < count
    ) {
      return false;
    }
  }
  return true;
}
// @lc code=end
