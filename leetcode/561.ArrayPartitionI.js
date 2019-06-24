/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum(nums) {
  nums.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 1; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
}
