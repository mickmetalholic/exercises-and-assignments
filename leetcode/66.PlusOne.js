/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  let curIndex = digits.length - 1;
  digits[curIndex] += 1;
  let carry = Math.floor(digits[curIndex] / 10);
  while (carry) {
    digits[curIndex] = 0;
    if (curIndex === 0) {
      digits.unshift(1);
      carry = 0;
    } else {
      curIndex--;
      digits[curIndex] += 1;
      carry = Math.floor(digits[curIndex] / 10);
    }
  }
  return digits;
};