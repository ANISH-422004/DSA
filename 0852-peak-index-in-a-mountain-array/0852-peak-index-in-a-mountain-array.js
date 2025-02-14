/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {

    let s = 0, e = arr.length - 1
    let ans = 0;
    while (s <= e) {
        let mid = Math.floor((s + e) / 2)
        if (arr[mid] < arr[mid + 1]) { ans = mid + 1; s = mid + 1; }
        else if (arr[mid] > arr[mid + 1]) e = mid - 1
        else s = mid + 1
    }
    return ans;
};