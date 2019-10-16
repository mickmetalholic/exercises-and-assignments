# Solutions

# Two Points

We take two pointers, one at the beginning and the other at then end of the array. The area is formed by the two pointers, so we can calculate the area by multiply the width, which is the distantce of the two pointers and the height, which is the smaller one of the heights that the pointers point to. Because the area is limited by the smaller height, so we need to move the pointer pointing to the smaller height by one step towards the other end. Because if we move the longer one, the width will decrease and the height won't increase so we won't get a larger area. Every time we move the pointer, we need to update the maximum area.

**Complexity Analysis**:
1. Time Complexity: `O(n)`. We need process all the heights just once;
1. Space Complexity: `O(1)`. Just constant space is required.
