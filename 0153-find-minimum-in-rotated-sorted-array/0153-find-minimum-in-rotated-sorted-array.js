function findMin(arr) {
    let low = 0, high = arr.length - 1;
    let ans =+Infinity

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[low] <= arr[mid]) {
            ans = Math.min(ans, arr[low]);
            low = mid + 1;
        } else {
            high = mid - 1;
            ans = Math.min(ans, arr[mid]);
        }
    }
    
    return ans;
}
