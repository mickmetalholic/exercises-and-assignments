/*
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  if (x > 0) {
    res = Number(String(x).split('').reverse().join(''));
  } else {
    res = -Number(String(-x).split('').reverse().join(''));
  }
  return (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) ? 0 : res;
}
