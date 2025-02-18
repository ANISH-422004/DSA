/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

let thresholdChecker = (nums, divisor,threshold) => {
    let sum = 0;
    for (let num of nums) {
        sum += Math.ceil(num / divisor); // Round up division result
    }
    return sum <= threshold; // Check if it's within the threshold
};

var smallestDivisor = function (nums, threshold) {
    let l = 1, h = Math.max(...nums), ans = -1;

    while (l <= h) {
        let m = Math.floor((l + h) / 2);
        if (thresholdChecker(nums, m,threshold)) {
            ans = m;  // Store potential answer
            h = m - 1; // Try to find a smaller divisor
        } else {
            l = m + 1; // Increase divisor to reduce sum
        }
    }
    return ans;
};
