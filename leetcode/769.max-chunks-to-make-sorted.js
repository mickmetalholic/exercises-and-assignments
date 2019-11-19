/*
 * @lc app=leetcode id=769 lang=javascript
 *
 * [769] Max Chunks To Make Sorted
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
function maxChunksToSorted(arr) {
  // max := the rightmost edge
  let max = 0, chunks = 0;
  while (max < arr.length) {
    // use index to iterate all the elements of the current chunk
    let index = max;
    while (index <= max) {
      // make sure the rightmost edge is larger than all the elements of
      // the current chunk
      max = Math.max(arr[index], max);
      index++;
    }
    chunks++;
    max++;
  }
  return chunks;
}
// @lc code=end
