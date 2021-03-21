/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  const minSteps = nums.slice();

  minSteps[minSteps.length - 1] = 0;
  for (let i = minSteps.length - 2; i >= 0; i--) {
    minSteps[i] = 1 + Math.min(...minSteps.slice(i + 1, i + 1 + nums[i]));
  }

  return minSteps[0];
}
