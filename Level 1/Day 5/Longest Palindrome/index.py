class Solution:
    def longestPalindrome(self, s: str) -> int:
        dict = {}

        for i in s:
            if i in dict:
                dict[i] += 1
            else:
                dict[i] = 1
        
        count = 0
        oddCount = 0

        for i in dict.values():
            if i > 1:
                if i % 2 == 0:
                    count += i
                else:
                    count += i - 1
                    oddCount += 1
            else:
                oddCount += 1

        if oddCount > 0:
            count += 1

        return count            

a = Solution()
print(a.longestPalindrome("ababababa"))