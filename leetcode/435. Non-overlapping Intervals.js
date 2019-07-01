/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let res = 0, last = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (last[1] > intervals[i][0]) {
      res++;
      last = last[1] > intervals[i][1] ? intervals[i] : last;
    } else {
      last = intervals[i];
    }
  }
  return res;
}
