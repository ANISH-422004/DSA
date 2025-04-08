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
 * @return {boolean}
 */
const solve = (root, min, max) => {
    if (root == null) return true //base case 

    if ((max != null && root.val >= max) || (min != null && root.val <= min)) return false

    let leftCheck = solve(root.left, min, root.val)
    let rightCheck = solve(root.right, root.val, max)

    return leftCheck && rightCheck

}

var isValidBST = function (root) {
    return solve(root, null, null)
};