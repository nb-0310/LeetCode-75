import java.util.HashMap;
import java.util.Map;

class Solution {
    public static boolean isSubsequence(String s, String t) {
        int idx1 = 0, idx2 = 0;

        while (idx2 < t.length()) {
            if (t.charAt(idx2) == s.charAt(idx1)) idx1++;

            if (idx1 == s.length()) break;

            idx2++;
        }

        if (idx1 < s.length()) return false;

        return true;
    }

    public static void main(String[] args) {
        String str1 = "abcdef";
        String str2 = "bde";

        System.out.println(isSubsequence(str2, str1));
    }
}