//Brute force


//OPTIMIZED

var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let width = right - left;
        let area = minHeight * width;
        maxWater = Math.max(maxWater, area);

        // Move the smaller height pointer
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
