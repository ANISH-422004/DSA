/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var solve = function (arr, k, i) {
    if(arr.length===1) return arr[0]
    i = (i+k)%arr.length 
    arr.splice(i,1)
    return solve(arr , k , i )

}


var findTheWinner = function (n, k) {
    k-- 
    let arr = new Array(n)
    for(let i = 0  ;i<arr.length ; i ++){ 
        arr[i]= i+1
    }
    let ans = solve(arr , k , 0 )
    return ans
};