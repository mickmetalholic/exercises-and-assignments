/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
  // left := the last index of the left sorted subarray
  let left = 0;
  while (left + 1 < nums.length && nums[left] <= nums[left + 1]) {
    left++;
  }
  // the whole array is sorted
  if (left === nums.length - 1) return 0;

  // right := the first index of the right sorted subarray
  let right = nums.length - 1;
  while (right - 1 >= 0 && nums[right - 1] <= nums[right]) {
    right--;
  }

  // middle should include both left and right because left can
  // be larger than right and there is no element between them
  const middle = nums.slice(left, right + 1);
  const min = Math.min(...middle);
  const max = Math.max(...middle);

  while (left >= 0 && nums[left] > min) {
    left--;
  }
  while (right < nums.length && nums[right] < max) {
    right++;
  }

  return right - left - 1;
}
