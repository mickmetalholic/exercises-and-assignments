/*
 * @lc app=leetcode id=565 lang=javascript
 *
 * [565] Array Nesting
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayNesting(nums) {
  const visited = new Set();

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!visited.has(i)) {
      let cur = i, size = 0;
      do {
        visited.add(cur);
        size++;
        cur = nums[cur];
      } while (cur !== i)
      max = Math.max(max, size);
    }
  }
  return max;
}
