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
function solve(ans,root){
   if(root==null) return

   solve(ans,root.left) 
   solve(ans,root.right) 
   ans.push(root.val)
}

var postorderTraversal = function(root) {
    let ans = []
    solve(ans , root)
    return ans
};