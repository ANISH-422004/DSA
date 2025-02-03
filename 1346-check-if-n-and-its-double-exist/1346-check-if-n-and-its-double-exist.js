/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let set = new Set()
    let c= 0 
    for (let i = 0 ; i<arr.length ; i++ ){
        if(arr[i]==0) c++
        if(c>1) return true
    }
    for (let i = 0 ; i<arr.length ; i++) {
        set.add(arr[i])
        if(arr[i]!=0) if(set.has(arr[i]/2) || set.has(arr[i]*2)) return true

    }

    return false

};