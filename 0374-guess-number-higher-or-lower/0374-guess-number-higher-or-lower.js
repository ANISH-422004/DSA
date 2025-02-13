/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let f = 1, l = n 
    while(f<=l){
        let m = Math.floor((f+l)/2)
        if(guess(m)==0) return m
        else if(guess(m)==-1) l=m-1
        else f=m+1
    }

    return -1

};