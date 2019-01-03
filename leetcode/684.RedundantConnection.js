/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = (edges) => {
  const root = [];
  const findRoot = (p) => {
    if (root[p] === undefined) {
      root[p] = -1;
    }
    if (root[p] < 0) {
      return p;
    }
    const r = findRoot(root[p]);
    root[p] = r;
    return r;
  };

  let res;
  edges.some((e) => {
    const [p1, p2] = e;
    const p1Root = findRoot(p1);
    const p2Root = findRoot(p2);
    if (p1Root === p2Root) {
      res = e;
      return true;
    }
    if (root[p1Root] < root[p2Root]) {
      root[p2Root] = p1Root;
    } else {
      if (root[p1Root] === root[p2Root]) {
        root[p2Root]--;
      }
      root[p1Root] = p2Root;
    }
    return false;
  });
  return res;
};
