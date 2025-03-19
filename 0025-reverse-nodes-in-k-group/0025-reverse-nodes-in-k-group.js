var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;  // Base case

    let temp = head;
    let count = 0;

    // Check if at least k nodes exist
    while (temp && count < k) {
        temp = temp.next;
        count++;
    }

    if (count < k) return head; // If fewer than k nodes, return as is

    // Reverse k nodes
    let prev = null, curr = head, next = null;
    for (let i = 0; i < k; i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Connect the reversed part with the next recursive call
    head.next = reverseKGroup(curr, k);

    return prev; // New head after reversing
};
