/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  const dpMax = [], dpMin = [];
  dpMax[0] = nums[0];
  dpMin[0] = nums[0];
  let res1, res2;
  for (let i = 1; i < nums.length; i++) {
    res1 = dpMax[i - 1] * nums[i];
    res2 = dpMin[i - 1] * nums[i];
    dpMax[i] = Math.max(nums[i], res1, res2);
    dpMin[i] = Math.min(nums[i], res1, res2);
  }
  return Math.max(...dpMax);
}
