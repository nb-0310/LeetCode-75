function runningSum (arr) {
    const runningSum = []

    if (arr.length < 1) return runningSum

    runningSum.push (arr[0])

    for (let i = 1; i < arr.length; i++) {
        runningSum.push (runningSum[i - 1] + arr[i])
    }

    return runningSum
}

const arr = [1,2,3,4]
console.log (runningSum (arr))