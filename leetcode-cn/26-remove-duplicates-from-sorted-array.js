/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let length = 1;
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const last = nums[length - 1];
    if (current !== last) {
      nums[length] = current;
      length++;
    }
  }
  return length;
}
