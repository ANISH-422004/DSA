
// //BRUTE
// var checkIfExist = function(arr) {
//     let n = arr.length;
    
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i !== j && arr[i] === 2 * arr[j]) {
//                 return true;
//             }
//         }
//     }

//     return false;
// };

//OPTIMIZED {in class test i did it }
var checkIfExist = function (arr) {
    let set = new Set()

    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
        if (arr[i] != 0) if (set.has(arr[i] / 2) || set.has(arr[i] * 2)) return true

    }
    let c = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) c++
        if (c > 1) return true
    }

    return false

};