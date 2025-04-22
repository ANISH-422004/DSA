/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0;
        let maxLen = 0;

        for (let right = 0; right < s.length; right++) {
            // If character already in set, move left until it's removed
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }