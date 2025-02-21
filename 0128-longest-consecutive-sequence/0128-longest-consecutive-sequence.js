// var longestConsecutive = function(nums) {
//     if (nums.length === 0) return 0;

//     let set = new Set(nums);

//     let startPoints = new Set(set); 

//     for (let num of set) {
//         if (set.has(num - 1)) {
//             startPoints.delete(num);
//         }
//     }

//     let maxLen = 0;

//     for (let num of startPoints) {
//         let currentNum = num;
//         let count = 1;

//         while (set.has(currentNum + 1)) {
//             currentNum++;
//             count++;
//         }

//         maxLen = Math.max(maxLen, count);
//     }

//     return maxLen;
// };



var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b); // Sort in ascending order

    let maxLen = 1;
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            // Skip duplicate numbers
            continue;
        } else if (nums[i]  - 1 === nums[i - 1]) {
            // Increment count for consecutive numbers
            count++;
        } else {
            // Reset count if sequence breaks
            maxLen = Math.max(maxLen, count);
            count = 1;
        }
    }

    return Math.max(maxLen, count);
};
