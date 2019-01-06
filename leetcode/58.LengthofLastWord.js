/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
  const arr = s.split(' ').filter(e => e.length !== 0);
  return arr.length ? arr[arr.length - 1].length : 0;
};
