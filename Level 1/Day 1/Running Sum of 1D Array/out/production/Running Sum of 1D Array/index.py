def runningSum (list):
    runningSum = []

    if len (list) < 1:
        return runningSum

    runningSum.append (list[0])

    for i in range (1, len (list)):
        runningSum.append (runningSum[i - 1] + list[i])

    return runningSum

arr = [1, 2, 3, 4]
print (runningSum (arr))