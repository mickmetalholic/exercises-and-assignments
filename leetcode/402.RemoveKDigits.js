/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
  for (let i = 0; i < k; i++) {
    if (num.length <= 1) {
      return '0';
    } else {
      let index = 1;
      while (index < num.length && num[index - 1] <= num[index]) {
        index++;
      }
      if (index === num.length) {
        num = num.slice(0, -1);
      } else {
        num = `${num.slice(0, index - 1)}${num.slice(index)}`;
      }
    }
  }
  while (num.length > 0 && num[0] === '0') {
    num = num.slice(1)
  }
  return num.length === 0 ? '0' : num;
}
