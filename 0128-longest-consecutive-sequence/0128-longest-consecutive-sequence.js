var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    let set = new Set(nums);
    let maxLen = 0;

    // Iterate through numbers and find sequences
    for (let num of set) {
        if (!set.has(num - 1)) { // Only process sequence starters
            let currentNum = num;
            let count = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                count++;
            }

            maxLen = Math.max(maxLen, count);
        }
    }

    return maxLen;
};
