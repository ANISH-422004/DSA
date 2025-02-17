/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0, end = nums.length - 1;
    let ans = nums[0]; // Store the minimum element

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] >= nums[start]) { 
            ans = Math.min(ans, nums[start]);
            start = mid + 1;
        } else {
            ans = Math.min(ans, nums[mid]);
            end = mid - 1;
        }
    }
    return ans;
};
