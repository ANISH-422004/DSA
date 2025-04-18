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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];

    const dfs = (node, currentPath, sumLeft) => {
        if (!node) return;

        currentPath.push(node.val);
        sumLeft -= node.val;

        // Leaf node and target sum matched
        if (!node.left && !node.right && sumLeft === 0) {
            result.push([...currentPath]); // copy path
        }

        dfs(node.left, currentPath, sumLeft);
        dfs(node.right, currentPath, sumLeft);

        currentPath.pop(); // backtrack

        return
    };

    dfs(root, [], targetSum);
    return result;
};
