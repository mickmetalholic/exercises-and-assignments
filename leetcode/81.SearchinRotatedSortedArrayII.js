/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search (nums, target) {
  let l = 0, r = nums.length;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) return true;
    if (nums[m] === nums[l]) {
      l++;
    } else if (nums[m] > nums[l]) {
      // left
      if (target >= nums[l] && target < nums[m]) {
        return _search(nums.slice(l, m), target);
      } else {
        l = m + 1;
      }
    } else {
      // right
      if (target <= nums[r - 1] && target > nums[m]) {
        return _search(nums.slice(m + 1, r), target);
      } else {
        r = m;
      }
    }
  }
  return false;

  function _search(nums, target) {
    let l = 0, r = nums.length;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m;
      } else {
        return true;
      }
    }
    return false;
  }
}
