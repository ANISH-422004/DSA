var nextGreaterElement = function (nums1, nums2) {
    let nextGreater = new Map();
    let stack = [];

    // Step 1: Find next greater elements in nums2 using a monotonic stack
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            nextGreater.set(stack.pop(), num);
        }
        stack.push(num);
    }

    // Step 2: Build result for nums1 using the precomputed nextGreater map
    return nums1.map(num => nextGreater.get(num) || -1);
};
