/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  if (nums.length === 1) return true;
  let maxIndex = nums[0];
  for (let i = 1; i <= maxIndex; i++) {
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (maxIndex >= nums.length - 1) {
      return true;
    }
  }
  return false;
}
