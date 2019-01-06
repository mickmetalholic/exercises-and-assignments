/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
  if (rowIndex === 0) return [1];
  let lastRow = [1];
  for (let i = 1; i <= rowIndex; i++) {
    const curRow = [];
    curRow[0] = curRow[i] = 1;
    for (let j = 1; j < i; j++) {
      curRow[j] = lastRow[j - 1] + lastRow[j];
    }
    lastRow = curRow;
  }
  return lastRow;
};