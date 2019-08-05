/**
 * @param num: A list of integers
 * @return: An integer
 */
function longestConsecutive(num) {
  const set = new Set(num), visited = new Set();
  let res = 0;
  for (const e of set) {
    if (!visited.has(e)) {
      let max = e, min = e;
      while (set.has(max)) {
        visited.add(max);
        max++;
      }
      while (set.has(min)) {
        visited.add(min);
        min--;
      }
      res = Math.max(res, max - min - 1);
    }
  }
  return res;
}
