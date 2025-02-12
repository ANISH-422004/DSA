/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let i = 0;

    while (i < nums.length) {
        let correctIdx = nums[i] - 1; // Correct position for nums[i]

        // If it's already in the correct position, move to the next element
        if (nums[i] === nums[correctIdx]) {
            i++;
        } else {
            // Swap only if it's not in the correct position
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        }
    }

    // Find the duplicate
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return nums[i]; // This is the duplicate
        }
    }

    return -1; // Should never reach here
};
