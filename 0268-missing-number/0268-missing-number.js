
// var missingNumber = function(nums) {
//     let n = nums.length
//     nums.sort((a,b)=>(a-b))
//     for(let i = 0 ; i <= n ; i++ ){
//         if(nums[i]!=i) return i 
//     }
// };

var missingNumber = function(nums) {
    let i = 0;
    let n = nums.length;

    // Cyclic sort to place numbers in correct positions
    while (i < n) {
        let correctIdx = nums[i]; // The correct index for nums[i]
        
        if (nums[i] < n && nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]; // Swap
        } else {
            i++;
        }
    }

    // Find the missing number
    for (let j = 0; j < n; j++) {
        if (nums[j] !== j) return j;
    }

    // If all numbers are present, missing number is `n`
    return n;
};
