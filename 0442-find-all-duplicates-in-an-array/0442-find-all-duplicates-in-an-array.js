/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let i = 0;
    let n = nums.length;
    let duplicates = [];

    while (i < n) {
        let correctIdx = nums[i] - 1;
        if (nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]; 
        } else {
            i++;
        }
    }

    
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            duplicates.push(nums[i]); 
        }
    }

    return duplicates;
};
