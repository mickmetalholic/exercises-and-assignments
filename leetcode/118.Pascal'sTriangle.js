/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const curRow = [];
    curRow[0] = 1;
    curRow[i] = 1;
    for (let j = 1; j < i; j++) {
      curRow[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push(curRow);
  }
  return res;
};