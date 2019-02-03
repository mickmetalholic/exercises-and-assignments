/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let left;
  let l = 0, r = nums.length;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      if (m === 0 || nums[m - 1] < target) {
        left = m;
        break;
      } else {
        r = m;
      }
    } else if (nums[m] > target) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  if (left === undefined) return [-1, -1];

  let right;
  l = 0;
  r = nums.length;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      if (m === nums.length - 1 || nums[m + 1] > target) {
        right = m;
        break;
      } else {
        l = m + 1;
      }
    } else if (nums[m] > target) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return [left, right];
}
