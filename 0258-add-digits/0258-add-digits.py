class Solution:
    def addDigits(self, num: int) -> int:
        sum = 0

        def cod(n):
            nonlocal sum      # 👈 tells Python: use outer `sum`
            sum = 0           # 👈 reset every time
            c = 0

            while n > 0:
                sum += n % 10
                n = n // 10
                c = c + 1

            return c

        if num == 0:
            return 0

        while cod(num) > 1:
            num = sum

        return num
