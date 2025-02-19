/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = new Map();
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let ans = 0;
    let hasOdd = false; 

    for (let key of map.keys()) {
        let count = map.get(key);
        if (count % 2 === 0) {
            ans += count;
        } else {
            ans += count - 1; 
            hasOdd = true; 
        }
    }

    return hasOdd ? ans + 1 : ans;
};
