var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    let set = new Set(nums);
    let maxLen = 0;
    
    for (let num of set) {
        // Check if it's the start of a sequence
        if (!set.has(num - 1)) { 
            let currentNum = num;
            let count = 1;
            
            // Expand the sequence
            while (set.has(currentNum + 1)) {
                currentNum++;
                count++;
            }
            
            maxLen = Math.max(maxLen, count);
        }
    }
    
    return maxLen;
};
