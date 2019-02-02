/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  const sums = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] < 0 ? nums[i] : nums[i] + sums[i - 1];
  }
  return Math.max(...sums);
};
