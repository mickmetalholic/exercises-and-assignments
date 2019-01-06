/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let i = 0;
  while (i < nums.length) {
    if (target > nums[i]) {
      i++;
    } else {
      break;
    }
  }
  return i;
};