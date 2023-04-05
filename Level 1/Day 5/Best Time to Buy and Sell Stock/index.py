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

    
# def maxProfit(prices):
#         i = 0
#         j = 1

#         while prices[j] < prices[i]:
#             j += 1
#             i += 1
#             if j == len(prices):
#                  return 0

#         maxProfit = prices[j] - prices[i]

#         while j < len(prices):
#             if prices[j] - prices[i] > maxProfit:
#                 maxProfit = prices[j] - prices[i]
            
#             j += 1

#         return maxProfit

# prices = [1,1,5,3,6,20]
# print (maxProfit(prices))