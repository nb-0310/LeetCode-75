class Solution {
    public static int maxProfit(int[] prices) {
        int i = 0, j = 1, maxProfit = 0;

        while (j < prices.length) {
            if (prices[j] > prices[i]) {
                int profit = prices[j] - prices[i];
                maxProfit = Math.max (maxProfit, profit);
            } else i = j;

            j++;
        }

        return maxProfit;
    }

    public static void main(String[] args) {
        int arr[] = new int[] {7,1,5,3,6,4};

        System.out.println(maxProfit(arr));
    }
}