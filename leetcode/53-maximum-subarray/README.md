# Solutions

## Dynamic Programming

Iterate the given array and calculate the maxium sum of each number, which is the maxium sum of the subarray ending with this number. For every number, if the maxium sum of the previous number is positive, the maxium sum is the sum of the value of the current number and the previous maxium sum, or it is the current number. Keep track of the maxium sum of all of the subarrays and return it as the final result.

**Complexity Analysis**:
1. Time Complexity: `O(n)`. We need iterate the array once;
2. Space Complexity: `O(1)`. It only requires 2 extra variables.
