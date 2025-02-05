
///////BEFORE THIS SOLVE 1299

// var trap = function(height) {
//     let n = height.length;
//     let water = 0;

//     for (let i = 0; i < n; i++) {
//         let leftMax = 0, rightMax = 0;

//         // Find the max height on the left
//         for (let j = i; j >= 0; j--) {
//             leftMax = Math.max(leftMax, height[j]);
//         }

//         // Find the max height on the right
//         for (let j = i; j < n; j++) {
//             rightMax = Math.max(rightMax, height[j]);
//         }

//         // Calculate trapped water at position i
//         water += Math.min(leftMax, rightMax) - height[i];
//     }

//     return water;
// };


/////// OPTIMIZED APPROACH 

var trap = function(height) {
    let n = height.length;
    if (n === 0) return 0; // Edge case

    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);
    let water = 0;

    // Fill leftMax array
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Fill rightMax array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate trapped water
    for (let i = 0; i < n; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return water;
};
