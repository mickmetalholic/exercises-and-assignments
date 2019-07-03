/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let res = 0, j = 0;
  for (let i = 0; i < g.length; i++) {
    while (j < s.length && s[j] < g[i]) {
      j++;
    }

    if (j === s.length) {
      return res;
    } else {
      res++;
      j++;
    }
  }
  return res;
}
