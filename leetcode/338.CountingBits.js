/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = num => {
  return Array.from({ length: num + 1 }, (_, i) => {
    let count = 0;
    while (i) {
      if (i % 2) {
        count++;
      }
      i = Math.floor(i / 2);
    }
    return count;
  });
};
