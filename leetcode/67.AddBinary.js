/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  const arrA = a.split('');
  const arrB = b.split('');
  let carry = 0, i = 0;
  const res = [];
  while (i < arrA.length || i < arrB.length) {
    res[i] = (arrA.length - i - 1 < 0 ? 0 : Number(arrA[arrA.length - i - 1]))
      + (arrB.length - i - 1 < 0 ? 0 : Number(arrB[arrB.length - i - 1]))
      + carry;
    if (res[i] > 1) {
      carry = 1;
      res[i] -= 2
    } else {
      carry = 0;
    }
    i++;
  }
  if (carry === 1) {
    res[i] = 1;
  }
  return res.reverse().join('');
};