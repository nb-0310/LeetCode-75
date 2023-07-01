class Solution {
    public static int pivotIndex(int[] nums) {
        int[] left = new int[nums.length];
        int[] right = new int[nums.length];

        left[0] = 0;
        right[nums.length - 1] = 0;

        for (int i = 1; i < nums.length; i++) {
            left[i] = left[i - 1] + nums[i - 1];
        }

        for (int i = nums.length - 2; i >= 0; i--) {
            right[i] = right[i + 1] + nums[i + 1];
        }

        int pivIdx = -1;

        for (int i = 0; i < left.length; i++) {
            if (left[i] == right[i]) {
                pivIdx = i;
                break;
            }
        }

        return pivIdx;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{1, 7, 3, 6, 5, 6};
        System.out.println(pivotIndex(arr));
    }
}


/*
* [1, 7, 3, 6, 5, 6]
* left: [0, 1, 8, 11, 17, 22]
* right: [27, 20, 17, 11, 6, 0]
*
*
* */