/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode hare = head;
        ListNode tort = head;

        while (hare != null && hare.next != null) {
            hare = hare.next.next;
            tort = tort.next;

            if (hare == tort) {
                hare = head;

                while (hare != tort) {
                    hare = hare.next;
                    tort = tort.next;
                }
                return hare;
            }
        }
        return null;
    }
}