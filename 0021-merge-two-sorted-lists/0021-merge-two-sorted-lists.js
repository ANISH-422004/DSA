// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(list1, list2) {
//     let dummy = new ListNode(-1); 
//     let temp = dummy;

//     let a = list1
//     let b = list2

//     while (a !== null && b !== null) {
//         if (a.val < b.val) {
//             temp.next = a;
//             a = a.next;
//         } else {
//             temp.next = b;
//             b = b.next;
//         }
//         temp = temp.next;
//     }

//     if (a !== null) temp.next = a;
//     if (b !== null) temp.next = b;

//     return dummy.next; 
// };

 //////////////// RECURSION /////////////////
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
