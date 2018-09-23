/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => s.split(' ')
  .map(word => word.split('').reverse().join(''))
  .join(' ');
