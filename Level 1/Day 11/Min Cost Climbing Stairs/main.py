class Solution:
    def minCostClimbingStairs(self, cost):
        if len(cost) == 2:
            return 1
        cost.append(0)
        for i in range(len(cost) - 3, -1, -1):
            cost[i] += min(cost[i + 1], cost[i + 2])
        return min(cost[0], cost[1])
    
s = Solution()
arr = [0,1,2,2]
print(s.minCostClimbingStairs(arr))