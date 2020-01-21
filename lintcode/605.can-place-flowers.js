/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0) return true;

  let cnt = 0, i = 0;
  while (cnt < n && i < flowerbed.length) {
    if (
      i + 1 < flowerbed.length
      && flowerbed[i] === 0 
      && flowerbed[i + 1] === 0
    ) {
      if (
        i === 0
        || i + 2 === flowerbed.length
      ) {
        cnt++;
        i++;
      } else if (flowerbed[i + 2] === 0) {
        cnt++;
        i += 2;
      } else {
        i += 3;
      }
    } else {
      i++;
    }
  }
  return cnt === n;
}
// @lc code=end
