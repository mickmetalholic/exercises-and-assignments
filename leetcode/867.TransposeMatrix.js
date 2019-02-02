/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = (A) => {
  const rowCount = A.length;
  const columnCount = A[0].length;
  const res = Array.from(
    { length: columnCount },
    _ => Array.from({ length: rowCount }),
  );
  A.forEach((row, i) => {
    row.forEach((e, j) => {
      res[j][i] = e;
    });
  });
  return res;
};
