/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let f= 0 
    let l = nums.length-1
    while(f<=l){
        let m = Math.floor((f+l)/2)
        if(nums[m]==target) return m
        else if (nums[m]<target) f=m+1
        else l=m-1

    }

    return -1
};