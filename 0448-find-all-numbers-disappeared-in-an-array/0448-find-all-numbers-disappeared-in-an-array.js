/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let i = 0;
    let n = nums.length;

    // Cyclic Sort: Place each number at its correct position
    while (i < n) {
        let correctIdx = nums[i] - 1; // Correct position for nums[i]
        
        // Swap if the number is in the range [1, n] and not at the correct index
        if (nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        } else {
            i++;
        }
    }

    // Find missing numbers
    let missingNumbers = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            missingNumbers.push(i + 1);
        }
    }

    return missingNumbers;
};
