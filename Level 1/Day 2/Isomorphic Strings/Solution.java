import java.util.HashMap;
import java.util.Map;

class Solution {
    public static boolean isIsomorphic(String s, String t) {
        HashMap<Character, Character> map1 = new HashMap<>();
        HashMap<Character, Character> map2 = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            if (map1.containsKey(s.charAt(i)) && t.charAt(i) != map1.get(s.charAt(i))) return false;
            else map1.put(s.charAt(i), t.charAt(i));
        }

        for (int i = 0; i < t.length(); i++) {
            if (map2.containsKey(t.charAt(i)) && s.charAt(i) != map2.get(t.charAt(i))) return false;
            else map2.put(t.charAt(i), s.charAt(i));
        }

        for (Map.Entry<Character, Character> entry : map1.entrySet()) {
            Character key = entry.getKey();
            Character value = entry.getValue();
            System.out.println(key + " " + value);

            if (map1.get(key) != value) return false;
            if (map2.get(value) != key) return false;
        }

        return true;
    }

    public static void main(String[] args) {
        String s1 = "egg";
        String s2 = "adb";

        System.out.println(isIsomorphic(s1, s2));
    }
}