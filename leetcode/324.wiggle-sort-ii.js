/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums) {
  const length = nums.length;
  const median = getKthLargest(nums, 0, nums.length - 1, Math.floor((nums.length + 1) / 2));

  let beginning = 0, end = nums.length - 1;
  let i = 0;
  while (i <= end) {
    if (nums[mapIndex(i)] < median) {
      swap(nums, mapIndex(i), mapIndex(end));
      end--;
    } else if (nums[mapIndex(i)] > median) {
      swap(nums, mapIndex(i), mapIndex(beginning));
      beginning++;
      i++;
    } else {
      i++;
    }
  }

  // iterate nums by 1,3,5...0,2,4
  // the number that equals median number will be put to the end
  // and the beginning positions
  function mapIndex(i) {
    return (2 * i + 1) % (length % 2 ? length : length + 1);
  }

  function getKthLargest(nums, l, r, k) {
    const m = partition(nums, l, r);
    if (m - l + 1 > k) {
      return getKthLargest(nums, l, m - 1, k);
    } else if (m - l + 1 < k) {
      return getKthLargest(nums, m + 1, r, k - (m - l + 1));
    } else {
      return nums[m];
    }
  }

  function partition(nums, l, r) {
    const pivot = nums[l];
    // i := the index of last number that is smaller than or equal to pivot
    let i = l;
    for (let j = l + 1; j <= r; j++) {
      if (nums[j] <= pivot) {
        i++;
        swap(nums, i, j);
      }
    }
    swap(nums, l, i);
    return i;
  }

  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

wiggleSort([4,5,5,6])
