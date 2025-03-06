/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let size = 0;
    let current = head;

    // Step 1: Find the size of the linked list
    while (current) {
        size++;
        current = current.next;
    }

    let decimalValue = 0;
    current = head;
    let power = size - 1; // Highest power of 2

    // Step 2: Compute decimal value using 2^(size-1-index)
    while (current) {
        decimalValue += current.val * Math.pow(2, power);
        power--; // Decrease the power for the next bit
        current = current.next;
    }

    return decimalValue;
};
