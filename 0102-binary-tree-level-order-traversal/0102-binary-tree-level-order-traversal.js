var levelOrder = function (root) {
    let ans = []; // Store the final result
    if (!root) return ans;

    let q = []; // Queue for BFS
    q.push(root);

    while (q.length !== 0) { // Fixed 'q.length' typo
        let size = q.length;
        let cur = []; // Store current level nodes

        for (let i = 0; i < size; i++) {
            let node = q.shift(); // Get the first node in the queue
            cur.push(node.val); 

            // Add children to the queue
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        ans.push(cur); // Add current level to the result
    }

    return ans;
};
