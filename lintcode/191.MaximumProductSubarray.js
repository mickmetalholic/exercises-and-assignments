/**
 * @param {number[]} nums: An array of integers
 * @return: An integer
 */
function maxProduct(nums) {
  const max = [], min = [];
  let res = max[0] = min[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    max[i] = Math.max(num, max[i - 1] * num, min[i - 1] * num);
    min[i] = Math.min(num, max[i - 1] * num, min[i - 1] * num);
    res = Math.max(res, max[i]);
  }
  return res;
}
