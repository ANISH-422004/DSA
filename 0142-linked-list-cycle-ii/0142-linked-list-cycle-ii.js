var detectCycle = function(head) {
    if (!head || !head.next) return null; // Edge case: empty or single node list
    
    let slow = head;
    let fast = head;
    
    // Step 1: Detect if a cycle exists
    while (fast && fast.next) {
        slow = slow.next;        // Move slow by 1 step
        fast = fast.next.next;    // Move fast by 2 steps
        
        if (slow === fast) { // Cycle detected
            // Step 2: Find cycle start
            slow = head; // Reset slow to head
            
            while (slow !== fast) { // Move both one step at a time
                slow = slow.next;
                fast = fast.next;
            }
            return slow; // Cycle start node
        }
    }
    
    return null; // No cycle
};

