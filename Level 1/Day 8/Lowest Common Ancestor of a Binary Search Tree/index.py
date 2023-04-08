class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def helper(root, p, q):
            if not root:
                return
            if p.val > root.val and q.val > root.val:
                return helper(root.right, p, q)
            if p.val < root.val and q.val < root.val:
                return helper(root.left, p, q)
            return root
        return helper(root, p, q)