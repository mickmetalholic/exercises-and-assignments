/**
 * @param A: An integer array
 * @return: An integer
 */
function singleNumberII(A) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (const num of A) {
      if ((num >> i) & 1 === 1) {
        count++;
      }
    }
    if (count % 3) {
      res |= (1 << i)
    }
  }
  return res;
}
