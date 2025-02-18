/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // Helper function to check if Koko can eat all the bananas in h hours at speed k
    const canEatAll = (k) => {
        let hoursNeeded = 0;
        for (let pile of piles) {
            hoursNeeded += Math.ceil(pile / k); // Calculate the hours needed for the current pile example : 3 is current maxspeed and 2th pile with 7banans :::::                 7/3 --> 2.___ ---> 3 ---> 1hr(3banana)+1(3banana)+1(1banana)
        }
        return hoursNeeded <= h; // Return true if within the allowed hours
    };

    let left = 1, right = Math.max(...piles); // Binary search range

    // Binary search on the eating speed
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canEatAll(mid)) {
            right = mid; // Try a smaller speed if Koko can finish in time
        } else {
            left = mid + 1; // Increase speed if Koko cannot finish in time
        }
    }

    return left; // The smallest speed that works
};
