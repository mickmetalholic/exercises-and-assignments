/*
 * @lc app=leetcode id=939 lang=javascript
 *
 * [939] Minimum Area Rectangle
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
function minAreaRect(points) {
  const set = new Set();
  for (const point of points) {
    set.add(key(point));
  }

  let minArea = Math.min();
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      if (x1 !== x2 && y1 !== y2) {
        if (
          set.has(key([x1, y2]))
          && set.has(key([x2, y1]))
        ) {
          const area = Math.abs((x1 - x2) * (y1 - y2));
          minArea = Math.min(minArea, area);
        }
      }
    }
  }
  return minArea === Infinity ? 0 : minArea;

  function key([x, y]) {
    return `${x}-${y}`;
  }
}
