/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  if (nums.length === 0) return 0;

  let prevSum = nums[0], max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prevSum = Math.max(nums[i], prevSum + nums[i]);
    max = Math.max(max, prevSum);
  }
  return max;
}
