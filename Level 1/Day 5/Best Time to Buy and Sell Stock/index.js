var maxProfit = function(prices) {
    let i = 0,
        j = 1,
        maxProfit = 0
    
    while (j < prices.length) {
        if (prices[j] > prices[i]) {
            const profit = prices[j] - prices[i]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            i = j
        }

        j++
    }

    return maxProfit
};