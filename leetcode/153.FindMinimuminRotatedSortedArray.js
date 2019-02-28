/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  if (nums.length === 1) return nums[0];

  let l = 0, r = nums.length;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if(nums[m - 1] > nums[m]) return nums[m];
    if (nums[0] < nums[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[0];
}
