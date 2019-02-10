/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const res = [];
  const n = nums.length;
  const count = Math.pow(2, n);
  for (let i = 0; i < count; i++) {
    const subset = [];
    const str = i.toString(2).padStart(n, 0);
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '1') subset.push(nums[j]);
    }
    res.push(subset);
  }
  return res;
}
