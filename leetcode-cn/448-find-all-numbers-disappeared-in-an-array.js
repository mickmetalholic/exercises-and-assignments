/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] - 1 !== i && nums[i] !== nums[nums[i] - 1]) {
      const n = nums[i];
      nums[i] = nums[n - 1];
      nums[n - 1] = n;
    }
  }

  return nums.reduce((res, n, i) => {
    if (n - 1 !== i) {
      res.push(i + 1);
    }
    return res;
  }, []);
}
