/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var solve = (root) => {
    if(root == null) return null
    solve(root.left)
    solve(root.right)
    let temp =root.left
    root.left = root.right 
    root.right  = temp 

}

var invertTree = function (root) {
    if (root == null) return null
    solve(root)
    return root
};