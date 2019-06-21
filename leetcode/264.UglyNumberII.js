/**
 * @param {number} n
 * @return {number}
 */
function nthUglyNumber(n) {
  const list = [];
  list[0] = 1;

  let l1 = 0, l2 = 0, l3 = 0;
  while (list.length < n) {
    const next = Math.min(list[l1] * 2, list[l2] * 3, list[l3] * 5);
    list.push(next);

    while (list[l1] * 2 <= next) l1++;
    while (list[l2] * 3 <= next) l2++;
    while (list[l3] * 5 <= next) l3++;
  }

  return list[n - 1];
}
