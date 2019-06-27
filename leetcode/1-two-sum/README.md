# Solutions

## Two-pass Hash Table

Build a hash table to record the indices of every element of the array. Then iterate the array to check the complement(`target - nums[i]`) is in the table. If it is, then the result is the current index and the index of the complement.

**Node**:
1. check the complement index that it should not be the same as the current index.

**Complexity Analysis**:
1. Time Complexity: O(n). Traversing the array twice takes O(2n) = O(n), and looking up the hash table takes O(1).
2. Space Complexity: O(n). The hash table stores n elements.

## One-pass Hash Table

Build a hash table while interating the array. The hash table stores the previous elements in the array of the current element. For every number, look up the index of the complement. If it exists, get the result. If it doesn't, add the number and its index to the hash table.

**Comlexity Analysis**:
1. Time Complexity: O(n). We need to traverse the array once.
2. Space Complexity: O(n). The extra space required most is depended on the number of the elements which is n.
