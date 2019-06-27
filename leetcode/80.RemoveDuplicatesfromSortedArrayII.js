/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let cur, count = 0, j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === cur) {
      count++;
    } else {
      cur = nums[i];
      count = 1;
    }
    if (count <= 2) {
      nums[j++] = nums[i];
    }
  }
  return j;
}
