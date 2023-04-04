class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        size = 0
        curr = head

        while curr:
            size = size + 1
            curr = curr.next

        mid = int(size / 2) + 1
        count = 0
        curr = head

        while curr:
            count = count + 1
            if count == mid:
                return curr
            
            curr = curr.next