/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) =>
  Array.from({ length: right - left + 1 }, (e, i) => left + i)
    .filter(e => e.toString().split('').every(digit => e % digit === 0));