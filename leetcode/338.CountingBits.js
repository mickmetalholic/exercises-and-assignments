/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num) {
  if (num === 0) return [0];

  const res = [0, 1];
  while (res.length <= num) {
    const size = res.length
    for (let j = 0; j < size && res.length <= num; j++) {
      res.push(res[j] + 1);
    }
  }
  return res;
}
