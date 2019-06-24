/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = nums.reduce((res, e, i) => {
    res[e] = i;
    return res;
  }, {});

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (
      map.hasOwnProperty(target - num)
      && map[target - num] !== i
    ) {
      return [i, map[target - num]];
    }
  }
}
