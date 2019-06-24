const lowestCommonAncestor = (root, p, q) => {
  if(root.val >= Math.min(p.val, q.val) && root.val <= Math.max(p.val, q.val)) {
    return root;
  }
  return root.val > Math.max(p.val, q.val) ? lowestCommonAncestor(root.left, p, q) :
    lowestCommonAncestor(root.right, p, q);
};