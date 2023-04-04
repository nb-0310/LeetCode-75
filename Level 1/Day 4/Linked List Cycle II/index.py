class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        hare = head
        tort = head

        while hare and hare.next:
            hare = hare.next.next
            tort = tort.next

            if hare == tort:
                hare = head
                while hare != tort:
                    hare = hare.next
                    tort = tort.next
                    
                return hare
            
        return None