# Solutions

## Manacher's Algorithm

First, we can modify the original string by inserting some special characters which do not appear in the original string, like '#' into the gap between every 2 characters. For example, `'babad'` becomes `'#b#a#b#a#d#'` after this process. This way, we can just expand string from every character instead of gaps. The length of palindrome of the original string will be `r - 1` where `r` is the radius of the palindrome of the new string. For example, `'#b#a#b#'` is a palindrome with radius of 4 and the palindrome of the original string `'bab'` has length of 3. After we get the longest palindrome of the new string, we can get the original string by split it with `'#'` character and then join the characters.

Then, we just find the palindrome from every character of the new string. To find the palindrome with the character as the pivot, just check whether the two characters with the same distance from the pivot is the same. If they are, expand the radius by 1, or we can stop.

During the iteration, we can record the right most position `r` of all the palindromes we have get and the respective pivot index `pivot`. If the current character index `i` is smaller than the right most position, the minimum radius of this character is the lower bound of `r - i + 1` and the radius of symmetry character with pivot of `pivot`.

**Complexity Analysis**:
1. Time Complexity: `O(n)`. We need process all the elements in the string just once in the inner loop;
1. Space Complexity: `O(n)`. It requires `n` position to store the radii of every character.

## Dynamic Programming

Create a matrix `dp`. `dp[i][j]` indicates whether the substring `str[i...j]` is a palindrome. The cases in which `i > j` is invalid. If `i === j`, the substring only contains 1 character, so it is a palindrome. If `str[i] !== str[j]`, the substring is not a palindrome. If `i + 1 === j`, whether the substring is a palindrome is decided by `str[i] === str[j]`. If `i + 1 < j`, the substring is a palindrome when `str[i] === str[j]` and the substring `str[i + 1...j - 1]` is palindrome. We need to record the left and right indices of the longest palindrome, iterate all the substrings and check whether it is a palindrome. If it is palindrome and the length is larger than the current longest substring, we need to update the indices.

**Note**:
1. Only the cases that `i <= j` is valid, so when we can iterate the `j` index starting from `i`;
1. `str[i][j]` depends on `str[i + 1...j - 1]`, so it it required that `i` is iterated from the largest index to smallest index.

**Complexity Analysis**:
1. Time Complexity: `O(n^2 / 2) = O(n ^ 2)`. We need to go through half of the `dp` matrix to fill it;
1. Space Complexity: `O(n^2)`. The size of `dp` is `n ^ 2`.
