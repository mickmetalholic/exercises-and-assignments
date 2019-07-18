# Solutions

## Binary Search

To find the median of `n` numbers, we can divide the numbers into to groups: the left and the right. The left group has `Math.floor((n + 1) / 2)` numbers which are smaller than the numbers of right group. The median should be the largest number of left group when `n` is odd, or the average of the largest number of left group and the smallest number of right group when `n` is even.

With two sorted array `nums1` and `nums2`, we need to put some small numbers into the left group from `nums1` and `nums2`, and the rest should be put into the right group. So we can select `k` smallest numbers from `nums1` and `Math.floor((n + 1) / 2) - k` smallest numbers from `nums2` among which the largest one is the largest number of left group. Then we can decide the smallest number of the right group.

To decide how many numbers we select from `nums1`, we can use binary search. The number is range from `max(0, Math.floor((n + 1) / 2) - nums2.length)` to `min(nums1.length, Math.floor((n + 1) / 2))`. If the largest value of left group from `nums1` is larger than the smallest value of right group from `nums2`, the current value is too large. And if the largest value of left group from `nums2` is larger than the smallest value of right group from `nums1`, the current value is too small. This way we can get the number of numbers we should select from `nums1` as the numbers of left group.


**Note**:
1. The minimum number of `k` should be the upper bound of `0` and `Math.floor((n + 1) / 2)` to prevent the number of selected numbers from `nums2` is larger than the size of `nums2`. The process of deciding the maximum value of `k` is similar.

**Complexity Analysis**:
1. Time Complexity: `O(log(min(m, n)))`. Use binary search to find the results costs at most log(n) times, and the range is decided by the smaller length of the two arrays;
1. Space Complexity: `O(1)`. There is no requirements for extra memory space.
