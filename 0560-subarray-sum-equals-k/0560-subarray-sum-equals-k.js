var subarraySum = function(nums, k) {
    let prefixSum = 0;
    let count = 0;
    let prefixMap = new Map();
    
    prefixMap.set(0, 1); // Initialize with sum 0 occurring once
    
    for (let num of nums) {
        prefixSum += num; // Update prefix sum
        
        if (prefixMap.has(prefixSum - k)) {
            count += prefixMap.get(prefixSum - k); // Count valid subarrays
        }
        
        // Update the map with the current prefix sum
        prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
    }
    
    return count;
};
