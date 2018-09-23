/**
 * @param {number[][]} M
 * @return {number}
 */

const findCircleNum = (M) => {
  const count = M.length;
  const father = Array.from({ length: count }).fill(-1);

  const findRoot = (i) => {
    if (father[i] < 0) {
      return i;
    }
    const root = findRoot(father[i]);
    father[i] = root;
    return root;
  };

  M.forEach((row, i) => {
    for (let j = i + 1; j < row.length; j++) {
      if (row[j]) {
        // union
        const iRoot = findRoot(i);
        const jRoot = findRoot(j);
        if (iRoot !== jRoot) {
          if (father[iRoot] > father[jRoot]) {
            father[iRoot] = jRoot;
          } else {
            if (father[iRoot] === father[jRoot]) {
              father[iRoot]--;
            }
            father[jRoot] = iRoot;
          }
        }
      }
    }
  });

  return father.filter(e => e < 0).length;
};
