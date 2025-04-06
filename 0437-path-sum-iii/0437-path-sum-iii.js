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
 * @param {number} targetSum
 * @return {number}
 */

// Count all paths starting from current node
function solve(node, t) {
    if (!node) return 0;

    let count = 0;
    if (node.val === t) count++;

    count += solve(node.left, t - node.val);
    count += solve(node.right, t - node.val);

    return count;
}

var pathSum = function(root, targetSum) {
    if (!root) return 0;

    let fromRoot = solve(root, targetSum);        
    let fromLeft = pathSum(root.left, targetSum);  
    let fromRight = pathSum(root.right, targetSum);

    return fromRoot + fromLeft + fromRight;
};
