/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
  const negSquares = [], posSquares = [];
  let i = 0;
  while (A[i] < 0) {
    negSquares.unshift(A[i]*A[i]);
    i++;
  }
  while (i < A.length) {
    posSquares.push(A[i]*A[i]);
    i++;
  }

  let p1 = 0, p2 = 0;
  const res = [];
  while (p1 < negSquares.length && p2 < posSquares.length) {
    if (negSquares[p1] < posSquares[p2]) {
      res.push(negSquares[p1]);
      p1++;
    } else {
      res.push(posSquares[p2]);
      p2++;
    }
  }
  while (p1 < negSquares.length) {
    res.push(negSquares[p1]);
    p1++;
  }
  while (p2 < posSquares.length) {
    res.push(posSquares[p2]);
    p2++;
  }
  return res;
}
