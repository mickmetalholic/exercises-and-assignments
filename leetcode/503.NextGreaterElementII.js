/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = nums => {
    const stack = [];
    const result = new Array(nums.length).fill(-1);
    nums.forEach((e, i, arr) => {
        while(arr[stack[stack.length - 1]] < e) {
            result[stack.pop()] = e;
        }
        stack.push(i);
    });
    nums.forEach((e, i, arr) => {
        while(arr[stack[stack.length - 1]] < e) {
            result[stack.pop()] = e;
        }
    });
    return result;
};