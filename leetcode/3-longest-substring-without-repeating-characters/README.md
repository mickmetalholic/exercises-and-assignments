# Solutions

## Sliding Window

Use two variables `i` and `j` to store the indices of start and the end of a substring, and use a hash set to store the characters of the substring. If `s[j + 1]` is not in the hash set, we can just move `j` further to the next position and update the maximum length. If `s[j + 1]` has already been in the hash set, we need to slide `i` to next position and remove the character `s[i]` until the hash set does not contain `s[j + 1]`.

**Note**:
1. Remember to remove all the characters before the duplicated character, but there is no need to remove the duplicated one because the end of the character needs to be in the hash set.

**Complexity Analysis**:
1. Time Complexity: `O(2n) = O(n)`. In the worst case every characters in the string will be visited by `i` and `j` for twice;
1. Space Complexity: `O(max(m, n))`. The hash set needs to store all the characters of the string, which is limited by the size of the charset size `m`.

## Sliding Window Optimized

Instead of using a hash set, we can use a hash map to store the last indices of every character. When the last character of a substring is in the hash map, we need to update the start index, which should be the upper bounder of the current start index and the next position of the last index of the current character. Every time we visit the character we need to update the maximum length and the hash map, because the has map should store the last index of the character.

**Note**:
1. The start index should only slide toward right so it is the maximum value of current value and the last index of the current character.

**Complexity Analysis**:
1. Time Complexity: `O(n)`. We only need to visit every character once;
1. Space Complexity: `O(max(m, n))`. The same as sliding window.
