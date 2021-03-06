/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
  const res = nums.slice().fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * nums.length; i++) {
    const num = nums[i % nums.length];
    while (nums[stack[stack.length - 1]] < num) {
      const topIndex = stack.pop();
      res[topIndex] = num;
    }
    if (i < nums.length) {
      stack.push(i);
    }
  }

  return res;
}
