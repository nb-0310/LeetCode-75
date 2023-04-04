/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let curr = head
    let size = 0

    while (curr) {
        size += 1
        curr = curr.next
    }

    let mid = Math.floor(size / 2) + 1
    let count = 0
    curr = head

    while (curr) {
        count += 1

        if (count === mid) return curr

        curr = curr.next
    }
};