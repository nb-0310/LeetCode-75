var isSubsequence = function(s, t) {
    let idx1 = 0,
        idx2 = 0,
        isSubsequence = true

    while (idx2 < t.length) {
        if (t[idx2] == s[idx1]) idx1++

        idx2++
    }

    if (idx1 !== s.length) isSubsequence = false

    return isSubsequence
};

const str1 = 'axc'
const str2 = 'ahbgdc'
console.log (isSubsequence (str1, str2))