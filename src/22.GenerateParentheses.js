/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const res = [];
  const count = 0;
  res.push({ leftCount: 1, diff: 1, str: '(' });
  for (let i = 1; i < n * 2; i++) {
    const newRes = [];
    res.forEach(e => {
      if (e.leftCount < n) {
        if (e.diff > 0) {
          newRes.push({
            leftCount: e.leftCount,
            diff: e.diff - 1,
            str: `${e.str})`,
          });
        }
        e.leftCount++;
        e.diff++;
        e.str += '(';
      } else {
        e.diff--;
        e.str += ')';
      }
    });
    res.push(...newRes);
  }
  return res.map(e => e.str);
};