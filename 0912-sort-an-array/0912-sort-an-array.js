/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let divide = (arr, f, l) => {
        if (f < l) {
            let m = f + Math.floor((l - f) / 2);
            divide(arr, f, m);
            divide(arr, m + 1, l);
            conquer(arr, f, m, l);
        }
    };

    let conquer = (arr, f, m, l) => {
        let temp = new Array(l - f + 1);
        let idx1 = f, idx2 = m + 1, k = 0;

        // 3-pointer merge logic
        while (idx1 <= m && idx2 <= l) {
            if (arr[idx1] <= arr[idx2]) temp[k++] = arr[idx1++];
            else temp[k++] = arr[idx2++];
        }

        while (idx1 <= m) temp[k++] = arr[idx1++];
        while (idx2 <= l) temp[k++] = arr[idx2++];

        // Copy sorted elements back to arr
        for (let i = 0; i < temp.length; i++) {
            arr[f + i] = temp[i];
        }
    };

    divide(nums, 0, nums.length - 1);
    return nums;
};

// Example usage
console.log(sortArray([9, 6, 10, 3, 8, 1]));
