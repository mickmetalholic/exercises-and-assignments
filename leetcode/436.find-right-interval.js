/*
 * @lc app=leetcode id=436 lang=javascript
 *
 * [436] Find Right Interval
 */
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
function findRightInterval(intervals) {
  const map = {};
  for (let i = 0; i < intervals.length; i++) {
    map[intervals[i][0]] = i;
  }
  const starts = intervals.map(([a]) => a).sort((a, b) => a - b);

  return intervals.map(([_, e]) => {
    let l = 0, r = starts.length;
    let res = -1;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (starts[m] > e) {
        res = m;
        r = m;
      } else if (starts[m] < e) {
        l = m + 1;
      } else {
        return map[starts[m]];
      }
    }
    return res === -1 ? -1 : map[starts[res]];
  });
}
