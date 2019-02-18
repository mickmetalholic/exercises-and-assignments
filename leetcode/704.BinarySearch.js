/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let l = 0, r = nums.length;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m;
    } else {
      return m;
    }
  }
  return -1;
}
