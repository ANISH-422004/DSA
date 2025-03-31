var reverseKGroup = function(head, k) {
    if (!head || !head.next ||  k === 1) return head;  // Base case

    let temp = head;
    let count = 1;

    while (temp.next) {
        temp = temp.next;
        count++;
    }

    if (count < k) return head; // If fewer than k nodes, return as is

    let prev = null, curr = head, next = null;
    for (let i = 0; i < k; i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    head.next = reverseKGroup(curr, k);

    return prev; 
};
