var searchRange = function(nums, target) {
    function lowerBound(arr, target) {
        let left = 0, right = arr.length - 1, ans = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            if (arr[mid] === target) ans = mid;
        }
        return ans;
    }

    function upperBound(arr, target) {
        let left = 0, right = arr.length - 1, ans = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            if (arr[mid] === target) ans = mid;
        }
        return ans;
    }

    return [lowerBound(nums, target), upperBound(nums, target)];
};

