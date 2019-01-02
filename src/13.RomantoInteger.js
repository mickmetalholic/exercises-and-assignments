/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const symbolToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  const cache = [];
  s.split('').forEach(e => {
    if (cache.length === 0) {
      if (e === 'I' || e === 'X' || e === 'C') {
        cache.push(e);
      } else {
        res += symbolToInt[e];
      }
    } else {
      const last = cache.pop();
      if (
        (last === 'I' && (e === 'V' || e === 'X'))
        || (last === 'X' && (e === 'L' || e === 'C'))
        || (last === 'C' && (e === 'D' || e === 'M'))
      ) {
        res += (symbolToInt[e] - symbolToInt[last]);
      } else {
        if (e === 'I' || e === 'X' || e === 'C') {
          cache.push(e);
          res += symbolToInt[last];
        } else {
          res += (symbolToInt[e] + symbolToInt[last]);
        }
      }
    }
  });
  if (cache.length) {
    res += symbolToInt[cache.pop()];
  }
  return res;
};