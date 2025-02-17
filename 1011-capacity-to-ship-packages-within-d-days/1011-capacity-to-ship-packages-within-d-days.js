/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
function isValid(arr, days, m) {

    let count = 1, sum = 0

    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] > m) {
            count++
            sum = arr[i]
        } else {
            sum += arr[i]
        }
    }

    return count <= days
}



var shipWithinDays = function (weights, days) {

    if (days > weights.length) return -1

    let l = weights[0], r = weights[0]
    for (let i = 1; i < weights.length; i++) {
        l = Math.max(l, weights[i])
        r += weights[i]
    }

    let ans = -1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (isValid(weights, days, m)) {
            ans = m
            r = m - 1
        } else {
            l = m + 1
        }
    }

    return ans





};