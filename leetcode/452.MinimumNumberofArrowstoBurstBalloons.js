/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
  if (points.length === 0) return 0;

  points.sort(([a], [b]) => a - b);

  let res = 1, curEnd = points[0][1];
  for (let i = 1; i < points.length; i++) {
    const [start, end] = points[i];
    if (start > curEnd) {
      res++;
      curEnd = end;
    } else {
      curEnd = Math.min(curEnd, end);
    }
  }
  return res;
}
