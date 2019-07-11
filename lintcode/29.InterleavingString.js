/**
 * @param s1: A string
 * @param s2: A string
 * @param s3: A string
 * @return: Determine whether s3 is formed by interleaving of s1 and s2
 */
function isInterleave(s1, s2, s3) {
  return dfs(0, 0);

  function dfs(index1, index2) {
    if (index1 === s1.length) {
      return s2.slice(index2) === s3.slice(index1 + index2);
    } else if (index2 === s2.length) {
      return s1.slice(index1) === s3.slice(index1 + index2);
    }

    if (
      s3[index1 + index2] === s1[index1]
      && dfs(index1 + 1, index2)
    ) {
      return true;
    }
    if (
      s3[index1 + index2] === s2[index2]
      && dfs(index1, index2 + 1)
    ) {
      return true;
    }
    return false;
  }
}
