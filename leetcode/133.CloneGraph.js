/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
  const visited = [], newNodes = [];
  return _clone(node);

  function _clone(node) {
    let newNode;
    if (visited.includes(node)) {
      newNode = newNodes[visited.indexOf(node)];
    } else {
      newNode = new Node(node.val, []);
      visited.push(node);
      newNodes.push(newNode);
      newNode.neighbors = node.neighbors.map(neighbor => _clone(neighbor));
    }
    return newNode;
  }
}
