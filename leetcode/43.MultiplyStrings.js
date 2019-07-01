/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  const num1Arr = num1.split('').map(Number);
  const num2Arr = num2.split('').map(Number);

  const res = new Array(num1.length + num2.length).fill(0);
  for (let i = 0; i < num1Arr.length; i++) {
    const p1 = num1Arr.length - i - 1;
    for (let j = 0; j < num2Arr.length; j++) {
      const p2 = num2Arr.length - j - 1;
      const product = num1Arr[i] * num2Arr[j];
      res[res.length - (p1 + p2) - 1] += product;
    }
  }
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] >= 10) {
      res[i - 1] += Math.floor(res[i] / 10);
      res[i] %= 10;
    }
  }
  while (res.length && res[0] === 0) {
    res.shift();
  }
  return res.length ? res.join('') : '0';
}
