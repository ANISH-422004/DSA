class Solution:
    def check(self, nums: List[int]) -> bool:
        drops = 0
        n = len(nums)

        for i in range(n):
            if nums[i] > nums[(i + 1) % n]: ## cyclic checking 
                drops += 1
                if drops > 1:
                    return False

        return True
