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
 * @param {number} k
 * @return {number}
 */
 let solve = (root ,arr)=>{
    if(root==null) return 

    solve(root.left , arr)
    arr.push(root)
    solve(root.right , arr)
 }

var kthSmallest = function(root, k) {
 let arr = []
 solve(root,arr) 
 return arr[k-1].val  
};