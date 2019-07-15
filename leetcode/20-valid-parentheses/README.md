# Solutions

## Using a Stack

Initialize a stack, then process one bracket at a time. When we encounter an opening bracket, just push it to the stack; when we encounter a closing bracket, check if the stack is empty. If it's empty, it implies an invalid expression, or, pop the top element of the stack. If the popped element is an opening bracket of the same type with the closing bracket, we can continue processing, or it implies an invalid expression. After processing all the elements of the string, check if the stack is empty. If it is, the expression is valid, but if it's not, it means there still are some brackets to be closed, which implies an invalid expression.

**Note**:
1. before pop we need to check if the stack is empty;
1. remember to check if the stack is empty after processing the string.

**Complexity Analysis**:
1. Time Complexity: O(n). We need process all the elements in the string just once;
1. Space Complexity: O(n). It requires at most n positions to store all the elements.
