/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  let res = 0;
  while (x > 0 || y > 0) {
    const bitX = x % 2;
    const bitY = y % 2;
    if (bitX !== bitY) {
      res++;
    }
    x = Math.floor(x / 2);
    y = Math.floor(y / 2);
  }
  return res;
};
