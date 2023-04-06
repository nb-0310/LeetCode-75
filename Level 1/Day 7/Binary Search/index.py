class Solution:
    def search(self, nums , target: int) -> int:
        left, right = 0, len(nums) - 1

        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1
    
s = Solution()
arr = [-1,0,3,5,9,12]
print(s.search(arr, 9))