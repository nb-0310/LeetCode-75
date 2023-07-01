class Solution:
    def findAnagrams(self, s, p):
        if len(s) < len(p):
            return []
        l = len(p)
        i = 0
        j = l - 1

        while (j < l):
            