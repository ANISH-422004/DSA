class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
       if n<=0 : return False
       return (n>0 and n & (n-1) == 0) 