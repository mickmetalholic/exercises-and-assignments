/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);

  const dp1 = [];
  dp1[0] = nums[0];
  dp1[1] = nums[1];
  dp1[2] = nums[0] + nums[2];
  for (let i = 3; i < nums.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 2], dp1[i - 3]) + nums[i];
  }

  const dp2 = [];
  dp2[0] = nums[1];
  dp2[1] = nums[2];
  dp2[2] = nums[3] + nums[1];
  for (let i = 3; i < nums.length - 1; i++) {
    dp2[i] = Math.max(dp2[i - 2], dp2[i - 3]) + nums[i + 1];
  }

  return Math.max(dp1[nums.length - 3], dp1[nums.length - 2], dp2[nums.length - 3], dp2[nums.length - 2]);
}
