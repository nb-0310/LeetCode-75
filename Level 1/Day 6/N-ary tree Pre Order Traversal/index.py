class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        res = list()
        if not root:
            return res
        
        self.traverse(root, res)
        return res
    
    def traverse(self, root: 'Node', res):
        res.append(root.val)

        for i in root.children:
            self.traverse(i, res)