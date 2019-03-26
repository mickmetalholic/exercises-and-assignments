/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const res = Array.from({ length: nums.length }, (_, i) => i + 1);
  nums.forEach(e => res[e - 1] = 0);
  return res.filter(e => e !== 0);
}
