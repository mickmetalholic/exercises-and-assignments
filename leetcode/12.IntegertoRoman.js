/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  let n = num, res = '';

  const a = Math.floor(n / 1000);
  n -= a * 1000;
  res += 'M'.repeat(a);

  const b = Math.floor(n / 100);
  n -= b * 100;
  if (b > 0 && b < 4) {
    res += 'C'.repeat(b);
  } else if (b === 4) {
    res += 'CD';
  } else if (b > 4 && b < 9) {
    res += `D${'C'.repeat(b - 5)}`
  } else if (b === 9) {
    res += 'CM';
  }

  const c = Math.floor(n / 10);
  n -= c * 10;
  if (c > 0 && c < 4) {
    res += 'X'.repeat(c);
  } else if (c === 4) {
    res += 'XL';
  } else if (c > 4 && c < 9) {
    res += `L${'X'.repeat(c - 5)}`
  } else if (c === 9) {
    res += 'XC';
  }

  if (n > 0 && n < 4) {
    res += 'I'.repeat(n);
  } else if (n === 4) {
    res += 'IV';
  } else if (n > 4 && n < 9) {
    res += `V${'I'.repeat(n - 5)}`
  } else if (n === 9) {
    res += 'IX';
  }

  return res;
}
