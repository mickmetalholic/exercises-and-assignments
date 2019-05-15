/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  let p1 = 0, p2 = 0;
  p1 = nums[p1];
  p2 = nums[p2];
  p2 = nums[p2];
  while (p1 !== p2) {
    p1 = nums[p1];
    p2 = nums[p2];
    p2 = nums[p2];
  }
  p1 = 0;
  while (p1 !== p2) {
    p1 = nums[p1];
    p2 = nums[p2];
  }
  return p1;
}
