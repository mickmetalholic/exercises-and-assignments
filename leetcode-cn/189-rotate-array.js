/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const kk = k % nums.length;

  reverse(nums, 0, nums.length - kk - 1);
  reverse(nums, nums.length - kk, nums.length - 1);
  reverse(nums, 0, nums.length - 1);

  function reverse(nums, i, j) {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
}
