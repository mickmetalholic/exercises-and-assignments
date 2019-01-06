/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  const str = s.replace(/[\W]/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
};