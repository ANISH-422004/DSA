function buildTree(inorder, postorder) {
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function helper(left, right) {
        if (left > right) return null;

        const rootVal = postorder[postIndex--];
        const root = new TreeNode(rootVal);

        const index = inorderMap.get(rootVal);

        // \U0001f501 Build right subtree first
        root.right = helper(index + 1, right);
        root.left = helper(left, index - 1);

        return root;
    }

    return helper(0, inorder.length - 1);
}
