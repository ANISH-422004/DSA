var search = function(nums, target) {
    let f = 0, l = nums.length - 1;
    
    while (f <= l) {
        let m = Math.floor((f + l) / 2);
        
        if (nums[m] === target) return m; // Found target
        
        // Check if left part is sorted
        if (nums[f] <= nums[m]) {
            if (nums[f] <= target && target < nums[m]) {
                l = m - 1; // Search in the left part
            } else {
                f = m + 1; // Search in the right part
            }
        } 
        // Otherwise, the right part must be sorted
        else {
            if (nums[m] < target && target <= nums[l]) {
                f = m + 1; // Search in the right part
            } else {
                l = m - 1; // Search in the left part
            }
        }
    }
    
    return -1; // Target not found
};
