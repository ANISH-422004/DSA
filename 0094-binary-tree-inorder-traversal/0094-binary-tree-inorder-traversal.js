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
 * @return {number[]}
 */
var solve =(root , ans)=>{
    if(root==null) return 

    solve(root.left , ans)
    ans.push(root.val)
    solve(root.right , ans)

}
var inorderTraversal = function(root) {
    let ans = []

    solve(root , ans)

    return ans
    
};