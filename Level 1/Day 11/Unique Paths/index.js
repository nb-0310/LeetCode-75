var uniquePaths = function(m, n) {
    const dp = []

    for (let i = 0; i < m; i++) {
        const temp = []
        for (let j = 0; j < n; j++) {
            temp.push(1)
        }
        dp.push(temp)
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
};

console.log (uniquePaths(3, 7))