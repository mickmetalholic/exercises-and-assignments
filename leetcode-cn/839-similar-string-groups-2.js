/**
 * @param {string[]} strs
 * @return {number}
 */
function numSimilarGroups(strs) {
  const roots = strs.map((_, i) => i);

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isSimilar(strs[i], strs[j])) {
        roots[getRoot(j)] = i;
      }
    }
  }

  let res = 0;
  for (let i = 0; i < roots.length; i++) {
    if (roots[i] === i) res++;
  }
  return res;

  function getRoot(i) {
    return i === roots[i] ? i : getRoot(roots[i]);
  }
}

function isSimilar(str1, str2) {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;

  let diffPos1 = null, diffPos2 = null;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (diffPos1 === null) {
        diffPos1 = i;
      } else if (diffPos2 === null) {
        diffPos2 = i;
      } else {
        return false;
      }
    }
  }

  return str1[diffPos1] === str2[diffPos2] && str1[diffPos2] === str2[diffPos1];
}
