/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) return s;
  const resArr = Array.from({ length: numRows }, e => []);
  s.split('').forEach((c, i) => {
    let num = i % (numRows * 2 - 2);
    if (num >= numRows) {
      num = (numRows * 2 - 2) - num;
    }
    resArr[num].push(c);
  });
  return resArr.map(resRow => resRow.join('')).join('');
};
