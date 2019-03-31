/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
  const sumCount = { 0: 1 };
  let sum = 0, res = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    res += (sumCount[sum - k] || 0);

    sumCount[sum] = sumCount[sum] || 0;
    sumCount[sum]++;
  }

  return res;
}
