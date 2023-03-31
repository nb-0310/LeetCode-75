def pivotIndex(nums):
    left = [0] + [None] * (len (nums) - 1)
    right = [None] * (len (nums) - 1) + [0]

    for i in range (1, len (nums)):
        left[i] = left[i - 1] + nums[i - 1]

    for i in range (len (nums) - 2, -1, -1):
        right[i] = right[i + 1] + nums[i + 1]

    res = -1

    for i in range (len (nums)):
        if left[i] == right[i]:
            res = i
            break

    return res

arr = [1,2,3]
print (pivotIndex (arr))