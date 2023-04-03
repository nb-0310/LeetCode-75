class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) <= 0:
            return True

        idx1 = 0
        idx2 = 0
        isSubsequence = True

        while idx2 < len(t):
            if t[idx2] == s[idx1]:
                idx1 += 1

            if idx1 == len(s):
                break

            idx2 += 1

        if idx1 < len(s):
            isSubsequence = False

        return isSubsequence
    
sol = Solution()
print(sol.isSubsequence('b', 'abc'))