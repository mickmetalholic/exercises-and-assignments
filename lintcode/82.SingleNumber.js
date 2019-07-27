/**
 * @param A: An integer array
 * @return: An integer
 */
function singleNumber(A) {
  let res = 0;
  for (const num of A) {
    res ^= num;
  }
  return res;
}
