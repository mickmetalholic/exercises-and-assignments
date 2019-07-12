/*
 * @lc app=leetcode id=218 lang=javascript
 *
 * [218] The Skyline Problem
 */
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
function getSkyline(buildings) {
  const points = buildings.reduce((res, [x1, x2, h]) => {
    res.push([x1, h, 'l']);
    res.push([x2, h, 'r']);
    return res;
  }, [])
  .sort(([x1, h1, pos1], [x2, h2, pos2]) => {
    if (x1 === x2) {
      if (pos1 === 'l' && pos2 === 'l') {
        return h2 - h1;
      } else if (pos1 === 'r' && pos2 === 'r') {
        return h1 - h2;
      } else {
        return pos1 === 'l' ? -1 : 1;
      }
    } else {
      return x1 - x2;
    }
  });

  const heights = [], res = [];
  for (const [x, h, pos] of points) {
    const lastHeight = getHeight();
    if (pos === 'l') {
      insert(h);
    } else {
      remove(h);
    }
    const curHeight = getHeight();
    if (lastHeight !== curHeight) {
      res.push([x, curHeight]);
    }
  }
  return res;

  function insert(h) {
    heights.push(h);
    let curIndex = heights.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);
      if (heights[parentIndex] < h) {
        heights[curIndex] = heights[parentIndex];
        curIndex = parentIndex;
      } else {
        break;
      }
    }
    heights[curIndex] = h;
  }

  function remove(h) {
    let curIndex = heights.indexOf(h);
    if (curIndex === heights.length - 1) {
      heights.pop();
      return;
    }
    heights[curIndex] = heights.pop();
    const tmp = heights[curIndex];
    while (curIndex * 2 + 1 < heights.length) {
      let maxIndex = curIndex * 2 + 1;
      if (
        curIndex * 2 + 2 < heights.length
        && heights[curIndex * 2 + 2] > heights[maxIndex]
      ) {
        maxIndex++;
      }
      if (heights[maxIndex] > tmp) {
        heights[curIndex] = heights[maxIndex];
        curIndex = maxIndex;
      } else {
        break;
      }
    }
    heights[curIndex] = tmp;
  }

  function getHeight() {
    return heights.length === 0 ? 0 : heights[0];
  }
}
