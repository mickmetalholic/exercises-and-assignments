/**
 * @param {number} n
 * @return {number}
 */
function lastRemaining(n) {
  return last(n, true);
}

function last(n, isLeftToRight) {
  if (n === 1) return 1;

  if (isLeftToRight) {
    return 2 * last(Math.floor(n / 2), false);
  } else {
    if (n % 2) {
      return 2 * last(Math.floor(n / 2), true);
    } else {
      return 2 * last(Math.floor(n / 2), true) - 1;
    }
  }
}
