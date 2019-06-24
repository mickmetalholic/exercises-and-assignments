/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  let next = n, set = new Set();
  while (next !== 1 && !set.has(next)) {
    set.add(next);
    next = String(next).split('').reduce((res, e) => res + Math.pow(Number(e), 2), 0);
  }
  return next === 1;
}
