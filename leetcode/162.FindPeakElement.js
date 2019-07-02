/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
  let l = 0, r = nums.length;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (m > 0 && nums[m - 1] > nums[m]) {
      r = m;
    } else if (m < nums.length - 1 && nums[m + 1] > nums[m]) {
      l = m + 1;
    } else {
      return m;
    }
  }
}
