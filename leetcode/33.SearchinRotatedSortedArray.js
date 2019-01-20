/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let l = 0, h = nums.length;

  while (l < h) {
    let m = Math.floor((l + h) / 2);
    if (target === nums[m]) return m;

    if (nums[m] <= nums[h - 1]) {
      if (target > nums[m] && target <= nums[h - 1]) {
        return binarySearch(nums, target, m + 1, h);
      } else {
        h = m;
      }
    } else if (nums[m] >= nums[l]) {
      if (target >= nums[l] && target < nums[m]) {
        return binarySearch(nums, target, l, m);
      } else {
        l = m + 1;
      }
    }
  }
  return -1;

  function binarySearch(nums, target, l, h) {
    while (l < h) {
      let m = Math.floor((l + h) / 2);
      if (nums[m] > target) {
        h = m;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        return m;
      }
    }
    return -1;
  }
}
