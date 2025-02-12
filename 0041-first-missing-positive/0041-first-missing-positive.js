/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;

    // Step 1: Place each number in its correct position using Cyclic Sort
    let i = 0;
    while (i < n) {
        let correctIdx = nums[i] - 1; // The correct position for nums[i]

        // Swap only if nums[i] is in the range [1, n] and is not already in the correct position
        if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]; // Swap
        } else {
            i++;
        }
    }

    // Step 2: Find the first missing positive number
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // Step 3: If all numbers from 1 to n are present, return n + 1
    return n + 1;
};
