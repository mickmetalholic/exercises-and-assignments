/**
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength(nums) {
  if (nums.length === 0) return 0;
  let res = 1, p = 1, n = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      n = p + 1;
    } else if (nums[i - 1] < nums[i]) {
      p = n + 1;
    }
    res = Math.max(res, p, n);
  }
  return res;
}
