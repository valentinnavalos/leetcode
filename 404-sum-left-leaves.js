/**
 * 
 * Instructions:
 * 
 * Given the root of a binary tree, return the sum of all left leaves.
 * 
 * A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
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
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;

  let sum = 0;
  const stack = [{ node: root, side: "root" }];

  while (stack.length) {
    const current = stack.pop();

    if (current.side === "left" && !current.node.right && !current.node.left) {
      sum += current.node.val;
    }

    if (current.node.right)
      stack.push({ node: current.node.right, side: "right" });
    if (current.node.left)
      stack.push({ node: current.node.left, side: "left" });
  }

  return sum;
};
