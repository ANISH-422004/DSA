/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let f = 0, l = letters.length - 1;
    let ans = letters[0]; 

    while (f <= l) {
        let m = Math.floor((f + l) / 2);

        if (letters[m].charCodeAt(0) > target.charCodeAt(0)) {
            ans = letters[m]; 
            l = m - 1;
        } else {
            f = m + 1; 
        }
    }

    return ans;
};
