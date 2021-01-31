/**
 * @param {string[]} strs
 * @return {number}
 */
function numSimilarGroups(strs) {
  const added = new Set();

  let res = 0;
  for (const str of strs) {
    if (!added.has(str)) {
      res++;
      addSimilarStrs(str);
    }
  }
  return res;

  function addSimilarStrs(str) {
    for (const currentStr of strs) {
      if (!added.has(currentStr) && isSimilar(currentStr, str)) {
        added.add(currentStr);
        addSimilarStrs(currentStr);
      }
    }
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
