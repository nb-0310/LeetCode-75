class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i, j = 0, 1
        maxProfit = 0

        while j < len(prices):
            if prices[j] > prices[i]:
                profit = prices[j] - prices[i]
                maxProfit = max(maxProfit, profit)
            else:
                i = j
            
            j += 1
        
        return maxProfit