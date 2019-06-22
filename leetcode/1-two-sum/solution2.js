/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(target - nums[i])) {
      return [i, map[target - nums[i]]];
    } else {
      map[nums[i]] = i;
    }
  }
}
