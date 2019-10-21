/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
function maximumSwap(num) {
  if (num < 10) return num;

  const arr = `${num}`.split('').map(Number);

  const lastIndices = new Array(10);
  for (let i = 0; i < arr.length; i++) {
    lastIndices[arr[i]] = i;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 9; j > arr[i]; j--) {
      if (lastIndices[j] > i) {
        [arr[i], arr[lastIndices[j]]] = [arr[lastIndices[j]], arr[i]];
        return Number(arr.join(''));
      }
    }
  }

  return num;
}
// @lc code=end
