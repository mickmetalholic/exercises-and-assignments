/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  const map = {};
  return nums.some((num, i) => {
    if (typeof map[num] === 'number' && Math.abs(map[num] - i) <= k) {
      return true;
    } else {
      map[num] = i;
      return false;
    }
  });
}
