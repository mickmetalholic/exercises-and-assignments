/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  const MIN = -2147483648;
  const MAX = 2147483647;
  let res = Number.parseInt(str.trim());
  if (Number.isNaN(res)) {
    return 0;
  } else if (res > MAX) {
    return MAX;
  } else if (res < MIN) {
    return MIN;
  } else {
    return res;
  }
};
