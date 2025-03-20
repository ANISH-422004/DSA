/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);

        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch);
            continue;
        }

        if (stack.length === 0) return false; // Unmatched closing bracket

        if (ch === ")") {
            if (stack[stack.length - 1] === "(") stack.pop();
            else return false;
        }    
        
        else if (ch === "}") {
            if (stack[stack.length - 1] === "{") stack.pop();
            else return false;
        }    
        
        else if (ch === "]") {
            if (stack[stack.length - 1] === "[") stack.pop();
            else return false;
        }    
    }

    return stack.length === 0; // Stack should be empty if balanced
};
