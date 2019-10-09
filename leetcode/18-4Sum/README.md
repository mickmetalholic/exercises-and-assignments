# Solutions

## Two Points

Similar to 3-sum, we can iterate the array to get the fixed first two elements, and use two points method to get the last two elements.

**Complexity Analysis**:
1. Time Complexity: `O(nlogn + n^3)`. We need to use 3 level iteration to process every element;
1. Space Complexity: `O(1)`. No extra space is required.
