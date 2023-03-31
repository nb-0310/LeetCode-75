var pivotIndex = function(nums) {
    const left = []
    const right = []
    left[0] = 0
    right[nums.length - 1] = 0

    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] + nums[i - 1]
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] + nums[i + 1]
    }

    let res = -1

    for (let i = 0; i < nums.length; i++) {
        if (left[i] === right[i]) {
            res = i
            break
        }
    }

    return res
};

const arr = [2,1,-1]
console.log (pivotIndex (arr))