/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
function minEatingSpeed(piles, H) {
  // The maxium speed. Higher speed makes no sense.
  let K = Math.max(...piles);

  // In the best case, all bananas can be eaten with the speed of minK
  let minK = Math.ceil(piles.reduce((acc, e) => acc + e, 0) / H);

  // if K is larger than minK, the speed may still be decreased
  while (minK < K) {
    const k = Math.floor((minK + K) / 2);

    let h = 0;
    for (const pile of piles) {
      h += Math.ceil(pile / k);
    }

    if (h > H) {
      minK = k + 1;
    } else if (h <= H) {
      K = k;
    }
  }
  return K;
}
// @lc code=end
