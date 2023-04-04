var reverseList = function(head) {
    if (!head) return null

    if (!head.next) return head

    let prev = null,
        curr = head,
        next = curr.next

    while (curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
};