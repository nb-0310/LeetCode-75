class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = list()

        if not root:
            return res
        
        queue = collections.deque()
        queue.append(root)

        while queue:
            sub = []

            for i in range(len(queue)):
                node = queue.popleft()
                if node:
                    sub.append(node.val)
                    queue.append(node.left)
                    queue.append(node.right)
            
            if sub:
                res.append(sub)

        return res