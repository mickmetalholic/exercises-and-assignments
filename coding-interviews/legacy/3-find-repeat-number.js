/**
 * @param {number[]} nums
 * @return {number}
 */
function findRepeatNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      if (nums[nums[i]] === nums[i]) return nums[i];
      const current = nums[i];
      nums[i] = nums[current];
      nums[current] = current;
    }
  }
}
