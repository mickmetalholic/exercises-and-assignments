/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  let i = -1, j = nums.length, k = 0;
  while (k < j) {
    if (nums[k] === 0) {
      i++;
      [nums[k], nums[i]] = [nums[i], nums[k]];
      k++;
    } else if (nums[k] === 2) {
      j--;
      [nums[k], nums[j]] = [nums[j], nums[k]];
    } else {
      k++;
    }
  }
}
