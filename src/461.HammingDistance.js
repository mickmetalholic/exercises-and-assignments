/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  let res = 0;
  let xx = x;
  let yy = y;
  while (xx > 0 || yy > 0) {
    const bitX = x % 2;
    const bitY = y % 2;
    if (bitX !== bitY) {
      res += 1;
    }
    xx = Math.floor(x / 2);
    yy = Math.floor(y / 2);
  }
  return res;
};

module.exports = hammingDistance;
