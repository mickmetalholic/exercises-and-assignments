/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => String(x).split('').reverse().join('') === String(x);
