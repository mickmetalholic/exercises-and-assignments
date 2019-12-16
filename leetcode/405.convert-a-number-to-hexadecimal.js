/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
function toHex(num) {
  if (num === 0) return '0';

  let n = num;
  if (n < 0) {
    n = Math.pow(2, 32) + n;
  }

  const digits = [];
  while (n >= 1) {
    const remain = n % 16;
    digits.unshift(remain);
    n = Math.floor(n / 16);
  }

  const numToChar = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
  ];
  return digits.map(d => {
    return numToChar[d];
  }).join('');
}
// @lc code=end
