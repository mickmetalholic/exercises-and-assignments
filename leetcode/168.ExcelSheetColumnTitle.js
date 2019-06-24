/**
 * @param {number} n
 * @return {string}
 */
function convertToTitle(n) {
  const charCodeStart = 'A'.charCodeAt(0) - 1;
  let left = n, res = '';
  while (left > 0) {
    const remain = left % 26;
    left = Math.floor(left / 26);
    if (remain === 0) {
      res = `Z${res}`;
      left -= 1;
    } else {
      res = `${String.fromCharCode(remain + charCodeStart)}${res}`;
    }
  }
  return res;
}
