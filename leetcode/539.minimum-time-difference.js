/*
 * @lc app=leetcode id=539 lang=javascript
 *
 * [539] Minimum Time Difference
 */
/**
 * @param {string[]} timePoints
 * @return {number}
 */
function findMinDifference(timePoints) {
  const times = new Array(1440).fill(false);
  for (const timePoint of timePoints) {
    const [h, m] = timePoint.split(':').map(Number);
    const min = h * 60 + m;
    if (times[min]) return 0;
    times[min] = true;
  }

  let first = 0;
  while (!times[first]) {
    first++;
  }

  let res = Math.min();
  let pre = first;
  for (let i = first + 1; i < 1440; i++) {
    if (times[i]) {
      res = Math.min(res, i - pre);
      pre = i;
    }
  }
  return Math.min(res, first - pre + 1440);
}
