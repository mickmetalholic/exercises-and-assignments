/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  return _find(nums, 0, nums.length - 1, k);
}

function _find(nums, left, right, k) {
  if (left === right) {
    return nums[left];
  }
  let i = left, j = right;
  let pivot = nums[i];
  while (i < j) {
    while (pivot >= nums[j] && i < j) {
      j--;
    }
    nums[i] = nums[j];
    while (pivot <= nums[i] && i < j) {
      i++;
    }
    nums[j] = nums[i];
  }
  nums[i] = pivot;
  if (i > k - 1) {
    return _find(nums, left, i - 1, k);
  } else if (i < k - 1) {
    return _find(nums, i + 1, right, k);
  } else {
    return pivot;
  }
}
