class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        if numerator == 0:
            return "0"

        res = []

        # sign
        if (numerator < 0) ^ (denominator < 0):
            res.append("-")

        numerator, denominator = abs(numerator), abs(denominator)

        # integer part
        res.append(str(numerator // denominator))
        remainder = numerator % denominator

        if remainder == 0:
            return "".join(res)

        res.append(".")

        # remainder -> position mapping
        seen = {}

        while remainder != 0:
            if remainder in seen:
                idx = seen[remainder]
                res.insert(idx, "(")
                res.append(")")
                break

            seen[remainder] = len(res)
            remainder *= 10
            res.append(str(remainder // denominator))
            remainder %= denominator

        return "".join(res)
