/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const DIGIT_TO_LETTERS = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  return digits.split('').reduce((res, digit) => {
    const letters = DIGIT_TO_LETTERS[digit];
    return [].concat(...res.map(str => letters.map(letter => `${str}${letter}`)));
  }, ['']);
}
