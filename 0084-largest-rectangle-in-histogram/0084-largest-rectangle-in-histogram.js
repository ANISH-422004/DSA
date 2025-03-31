var largestRectangleArea = function(heights) {
    let n = heights.length;
    let pse = new Array(n).fill(-1); // Previous Smaller Element
    let nse = new Array(n).fill(n);  // Next Smaller Element
    let stack = [];

    // Compute PSE (Nearest Smaller to Left)
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length > 0) pse[i] = stack[stack.length - 1];
        stack.push(i);
    }

    stack = []; // Reset stack

    // Compute NSE (Nearest Smaller to Right)
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length > 0) nse[i] = stack[stack.length - 1];
        stack.push(i);
    }

    // Compute Maximum Area
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        let width = nse[i] - pse[i] - 1;
        maxArea = Math.max(maxArea, heights[i] * width);
    }

    return maxArea;
};
