/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (digits === '') return [];

  const DIGITS_TO_LETTERS = [
    'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'
  ];

  return digits.split('').reduce((res, d) => {
    return [].concat(...res.map(str => DIGITS_TO_LETTERS[d - 2].split('').map(s => `${str}${s}`)));
  }, ['']);
}
