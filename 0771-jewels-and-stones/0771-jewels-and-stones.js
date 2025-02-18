/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels)
    let count = 0 
    for(let s of stones){
        if(set.has(s)) count++
    }
    return count
};