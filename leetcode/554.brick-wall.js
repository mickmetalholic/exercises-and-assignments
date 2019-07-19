/*
 * @lc app=leetcode id=554 lang=javascript
 *
 * [554] Brick Wall
 */
/**
 * @param {number[][]} wall
 * @return {number}
 */
function leastBricks(wall) {
  if (wall.length === 0) return 0;

  const edgesCount = {};
  let max = 0;
  for (const row of wall) {
    let cur = 0;
    for (let i = 0; i < row.length - 1; i++) {
      cur += row[i];
      edgesCount[cur] = edgesCount[cur] || 0;
      edgesCount[cur]++;
      max = Math.max(max, edgesCount[cur]);
    }
  }
  return wall.length - max;
}
