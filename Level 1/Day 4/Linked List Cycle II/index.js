var detectCycle = function(head) {
    let hare = head
    let tort = head

    while (hare && hare.next) {
        hare = hare.next.next
        tort = tort.next

        if (hare === tort) {
            hare = head

            while (hare != tort) {
                hare = hare.next
                tort = tort.next
            }

            return hare
        }
    }

    return null
};