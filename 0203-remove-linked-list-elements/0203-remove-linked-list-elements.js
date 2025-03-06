/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//     let dummy = new ListNode(0, head); 
//     let prev = dummy, curr = head;

//     while (curr) {
//         if (curr.val === val) {
//             prev.next = curr.next; 
//         } else {
//             prev = curr; 
//         }
//         curr = curr.next; 
//     }

//     return dummy.next; 
// };



var removeElements = function(head, val) {
    while (head !== null && head.val === val) {
        head = head.next; // Move head forward if it needs to be removed
    }

    let curr = head;
    
    while (curr !== null && curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next; // Skip the node with val
        } else {
            curr = curr.next; // Move forward only if no removal
        }
    }

    return head;
};
