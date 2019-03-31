/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let candidate = nums[0], count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
      if (count === 0) {
        count = 1;
        candidate = nums[i];
      }
    }
  }
  return candidate;
}
