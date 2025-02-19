/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false; // If lengths differ, they can't be isomorphic

    let mapS = new Map(); // Map to store mapping from s -> t
    let mapT = new Map(); // Map to store mapping from t -> s

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // Check if the mapping exists and is consistent
        if ((mapS.has(charS) && mapS.get(charS) !== charT) || 
            (mapT.has(charT) && mapT.get(charT) !== charS)) {
            return false;
        }

        mapS.set(charS, charT); // Map s -> t
        mapT.set(charT, charS); // Map t -> s
    }

    return true; 
};
