/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return true; // Found target

        // Handle duplicates: shrink search space
        if (nums[start] === nums[mid] && nums[mid] === nums[end]) {
            start++;
            end--;
            continue;
        }

        // Left half is sorted
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1; // Search in left half
            } else {
                start = mid + 1; // Search in right half
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1; // Search in right half
            } else {
                end = mid - 1; // Search in left half
            }
        }
    }

    return false; // Target not found
};
