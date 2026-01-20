def bs(nl, left, right, target):
    ans = left - 1
    while left <= right:
        mid = (left + right) // 2
        if nl[mid] < target:
            ans = mid
            left = mid + 1
        else:
            right = mid - 1
    return ans


class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        n = len(nums)
        if n < 3:
            return 0

        nl = sorted(nums)
        count = 0

        for i in range(0, n - 2):
            if nl[i] == 0:
                continue

            for j in range(i + 1, n - 1):
                s = nl[i] + nl[j]

                k = bs(nl, j + 1, n - 1, s)

                if k > j:
                    count += (k - j)

        return count
