/*
 * @lc app=leetcode id=526 lang=javascript
 *
 * [526] Beautiful Arrangement
 */
/**
 * @param {number} N
 * @return {number}
 */
function countArrangement(N) {
  const visited = new Set();
  return count(1);

  function count() {
    // all numbers have been placed
    if (visited.size === N) return 1;

    // the number of visited.size numbers has been placed so the current
    // position should be visited.size + 1
    const currentPos = visited.size + 1;

    let res = 0;
    for (let i = 1; i <= N; i++) {
      // if the number has not been used and can be placed at
      // the current position
      if (
        !visited.has(i)
        && (currentPos % i === 0 || i % currentPos === 0)
      ) {
        visited.add(i);
        res += count();
        visited.delete(i);
      }
    }
    return res;
  }
}
