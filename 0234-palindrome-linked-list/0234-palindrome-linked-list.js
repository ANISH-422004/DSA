/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true; // Edge case: empty list or single node

    // Step 1: Find the middle using slow and fast pointers
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    
    // Step 3: Compare both halves
    let left = head, right = prev; // Right is now the head of the reversed half
    while (right) { // Only check the second half
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    
    return true;
};
