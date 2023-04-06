var solution = function(isBadVersion) {
    return function(n) {
        let left = 1, right = n
        let res = n

        while (left <= right) {
            const mid = parseInt((left + right) / 2)
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) return mid
            else if (isBadVersion(mid) && isBadVersion(mid - 1)) right = mid - 1
            else left = mid + 1
        }

        return res
    };
};