/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
  let sum = 0, res = 0;
  const map = {};
  map[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      sum--;
    } else {
      sum++;
    }
    if (map.hasOwnProperty(sum)) {
      res = Math.max(res, i - map[sum] + 1);
    } else if (!map.hasOwnProperty(sum)) {
      map[sum] = i + 1;
    }
  }
  return res;
}
