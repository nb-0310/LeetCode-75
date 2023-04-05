var longestPalindrome = function(s) {
    const obj = {}

    for (let i in s) {
        if (s[i] in obj) obj[s[i]]++
        else obj[s[i]] = 1
    }

    let count = 0, oddCount = 0

    for (let i in obj) {
        if (obj[i] > 1) {
            if (obj[i] % 2 === 0) count += obj[i]
            else {
                count += obj[i] - 1
                oddCount++
            }
        } else {
            oddCount++
        }
    }

    if (oddCount > 0) count++

    return count
};