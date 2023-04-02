const isIsomorphic = function(s, t) {
    const obj1 = {}
    const obj2 = {}

    for (let i in s) {
        if (s[i] in obj1 && obj1[s[i]] !== t[i]) return false
        else if (s[i] in obj1) continue
        else obj1[s[i]] = t[i]
    }

    for (let i in t) {
        if (t[i] in obj2 && obj2[t[i]] !== s[i]) return false
        else if (t[i] in obj2) continue
        else obj2[t[i]] = s[i]
    }

    for (let i in obj1) {
        if (i !== obj2[obj1[i]]) return false
    }

    for (let i in obj2) {
        if (i !== obj1[obj2[i]]) return false
    }

    return true
};

const str = 'title'
console.log (isIsomorphic (str, 'paper'))