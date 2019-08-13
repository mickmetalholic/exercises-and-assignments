# Solutions

## Two Points

The results are triplets, which means they are formed of 3 numbers. We can set the first number as fixed, and then use 2 pointers to get the results from the remained elements. The sum of the second and the third elements should be the opposite number of the first number.

**Note**:
1. To avoid duplicate results, we need first sort the array, and skip the duplicate numbers during iterating.

**Complexity Analysis**:
1. Time Complexity: `O(nlogn + n^2) = O(n^2)`. We need process all the remain elements in every iteration;
1. Space Complexity: `O(1)`. No extra space is required.
