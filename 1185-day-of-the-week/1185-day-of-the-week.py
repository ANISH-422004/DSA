class Solution:
    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
        days = ["Friday", "Saturday", "Sunday",
                "Monday", "Tuesday", "Wednesday", "Thursday"]

        def isLeap(y):
            return y % 400 == 0 or (y % 4 == 0 and y % 100 != 0)

        month_days = [31, 28, 31, 30, 31, 30,
                      31, 31, 30, 31, 30, 31]

        total = 0

        # years
        for y in range(1971, year):
            total += 366 if isLeap(y) else 365

        # months
        for m in range(1, month):
            if m == 2 and isLeap(year):
                total += 29
            else:
                total += month_days[m - 1]

        # days
        total += day - 1

        return days[total % 7]
