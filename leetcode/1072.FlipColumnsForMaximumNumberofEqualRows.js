/**
 * @param {number[][]} matrix
 * @return {number}
 */
function maxEqualRowsAfterFlips(matrix) {
  const map = new Map();
  let res = 0;
  for (const row of matrix) {
    let str = row.join('');
    if (map.has(str)) {
      const val = map.get(str) + 1;
      map.set(str, val);
      res = Math.max(res, val);
    } else {
      str = row.map(e => e === 1 ? 0 : 1).join('');
      if (map.has(str)) {
        const val = map.get(str) + 1;
        map.set(str, val);
        res = Math.max(res, val);
      } else {
        map.set(str, 1);
        res = Math.max(res, 1);
      }
    }
  }
  return res;
}
