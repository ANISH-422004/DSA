var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    let set = new Set(nums);

    // First loop: Mark all numbers as starting points (default true)
    let startPoints = new Set(set); 

    // Second loop: Remove numbers that are not sequence starters
    for (let num of set) {
        if (set.has(num - 1)) {
            startPoints.delete(num);
        }
    }

    let maxLen = 0;

    // Third loop: Expand sequences from valid start points
    for (let num of startPoints) {
        let currentNum = num;
        let count = 1;

        while (set.has(currentNum + 1)) {
            currentNum++;
            count++;
        }

        maxLen = Math.max(maxLen, count);
    }

    return maxLen;
};
