/**
 * 
 * Instructions:
 * 
 * Given the root of a binary tree, return its maximum depth.
 * 
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 * 
 * ---
 * 
 * Time complexity: O(n)
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

 Time complexity: O(n)
 */
var maxDepth = function (root) {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left) + 1;
  const rightDepth = maxDepth(root.right) + 1;

  if (leftDepth > rightDepth) return leftDepth;
  return rightDepth;
};
