/**
 * @param nums: A list of integers
 * @return: A integer indicate the sum of max subarray
 */
function maxSubArray(nums) {
  // sums[i] := the maximum sum of the subarray that contains nums[i]
  const sums = [];
  let res = nums[0];
  sums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] > 0 ? (sums[i - 1] + nums[i]) : nums[i];
    res = Math.max(res, sums[i]);
  }
  return res;
}
