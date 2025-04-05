var connect = function(root) {
    if (!root) return null;

    let queue = [root];
    while (queue.length > 0) {
        let size = queue.length;
        let prev = null;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (prev) prev.next = node;
            prev = node;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        prev.next = null;
    }
    return root;
};
