
//BROUTE FORCE
// var replaceElements = function (arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let max = -Infinity; 

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] > max) max = arr[j]; 
//         }

//         arr[i] = max; 
//     }

//     arr[arr.length - 1] = -1; 
//     return arr; 
// };

// OPTIMIZED

var replaceElements = function (arr) {
    let max = arr[arr.length - 1]
    arr[arr.length - 1] = -1
    for(let i = arr.length-2 ; i>=0 ; i--){
        let temp = arr[i]
        arr[i]=max
        max=Math.max(max,temp)
    }

    return arr



};
