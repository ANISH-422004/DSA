/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let f = 1, l = num
    if(num==1) return true
    while (f <= l) {
        let m = Math.floor((f + l) / 2)
        if (m * m == num) return true
        else if (m * m > num) l = m - 1
        else f = m + 1
    }
    return false
};
