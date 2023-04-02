# class Solution:
def isIsomorphic(s: str, t: str) -> bool:
    dict1 = {}
    dict2 = {}

    for i in range(len(s)):
        if s[i] in dict1 and dict1[s[i]] != t[i]:
            return False
        elif s[i] in dict1:
            continue
        else:
            dict1[s[i]] = t[i]

    for i in range(len(t)):
        if t[i] in dict2 and dict2[t[i]] != s[i]:
            return False
        elif t[i] in dict2:
            continue
        else:
            dict2[t[i]] = s[i]

    for i in dict1:
        if dict2.get(dict1[i]) != i:
            return False
        
    for i in dict2:
        if dict1.get(dict2[i]) != i:
            return False
        
    return True

print(isIsomorphic("paper", "title"))