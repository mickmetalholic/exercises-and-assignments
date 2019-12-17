# Solutions

## Using two pointers

Use two pointers to iterate the two lists respectively, during which compare the values of the two nodes the two pointers pointed to. Append the smaller node to the result linked list.

**Note**:
1. Use a 'dummy head' as the initial head of the result linked list.

**Complexity Analysis**:
1. Time Complexity: `O(n+m)`. We need iterate the two linked list once;
1. Space Complexity: `O(1)`. It doesn't require any extra space.
