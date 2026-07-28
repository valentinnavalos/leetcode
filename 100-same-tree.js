/**
 * 
 * Instructions: 
 * 
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * 
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 * 
 * ---
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  const stackP = [{ node: p, side: "root" }];
  const stackQ = [{ node: q, side: "root" }];

  while (stackP.length && stackQ.length && stackP.length === stackQ.length) {
    const currP = stackP.pop();
    const currQ = stackQ.pop();

    if (currP.node.val !== currQ.node.val || currP.side !== currQ.side) {
      return false;
    }

    if (currP.node.right) {
      stackP.push({ node: currP.node.right, side: "right" });
    }
    if (currP.node.left) {
      stackP.push({ node: currP.node.left, side: "left" });
    }

    if (currQ.node.right) {
      stackQ.push({ node: currQ.node.right, side: "right" });
    }
    if (currQ.node.left) {
      stackQ.push({ node: currQ.node.left, side: "left" });
    }
  }

  return !stackP.length && !stackQ.length;
};
