/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
public class Solution {
    public ListNode middleNode(ListNode head) {
        if (head == null) return null;
        if (head.next == null) return head;
        int len = 0;
        ListNode curr = head;

        while (curr != null) {
            len++;
            curr = curr.next;
        }

        int mid;

        mid = (len / 2) + 1;

        curr = head;

        while (mid > 0) {
            curr = curr.next;
        }

        return curr;
    }

    public static void main(String[] args) {
        System.out.println((6 / 2) );
    }
}