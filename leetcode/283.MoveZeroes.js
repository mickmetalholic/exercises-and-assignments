/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let l = 0, r = nums.length - 1;
  while (nums[r] === 0) {
    r--;
  }
  while (l < r) {
    while (nums[l] !== 0 && l < r) {
      l++;
    }
    if (l < r) {
      nums.splice(l, 1);
      nums.push(0);
      r--;
    }
  }
}
