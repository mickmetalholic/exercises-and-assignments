/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const res = nums.slice(0, -1);
  for (let i = 1; i < res.length; i++) {
    res[i] *= res[i - 1];
  }
  res.unshift(1);

  let rightProduct = 1;
  for (let i = res.length - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1];
    res[i] *= rightProduct;
  }
  return res;
}
