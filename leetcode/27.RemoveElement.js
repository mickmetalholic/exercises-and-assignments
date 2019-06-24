/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let next = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[next] = nums[i];
      next++;
    }
  }
  return next;
}
