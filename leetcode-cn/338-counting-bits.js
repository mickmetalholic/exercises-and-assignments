/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num) {
  const res = [0];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      res.push(res[i - 1] + 1);
    } else {
      res.push(res[i / 2]);
    }
  }
  return res;
}
