/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function merge(intervals) {
  intervals.sort((a, b) => a.start - b.start);

  const res = [];
  intervals.forEach((interval, i) => {
    if (i === 0) {
      res.push(interval);
    } else {
      const last = res[res.length - 1];
      if (last.end >= interval.start) {
        last.end = Math.max(last.end, interval.end);
      } else {
        res.push(interval);
      }
    }
  });
  return res;
}
