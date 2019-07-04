/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  if (nums.length === 0) return 1;

  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0
      && nums[i] - 1 < nums.length
      && nums[i] - 1 !== i
      && nums[i] !== nums[nums[i] - 1]
    ) {
      const index = nums[i] - 1;
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  }

  let j = 0;
  while (nums[j] - 1 === j && j < nums.length) {
    j++
  }
  return j + 1;
}
