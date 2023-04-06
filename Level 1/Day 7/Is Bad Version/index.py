class Solution:
    def firstBadVersion(self, n: int) -> int:
        left, right = 1, n
        res = n
        while left <= right:
            mid = (left + right) // 2
            if isBadVersion(mid) and not isBadVersion(mid - 1):
                return mid
            elif isBadVersion(mid) and isBadVersion(mid - 1):
                right = mid - 1
            else:
                left = mid + 1
        return res

s = Solution()
print(s.firstBadVersion(5))