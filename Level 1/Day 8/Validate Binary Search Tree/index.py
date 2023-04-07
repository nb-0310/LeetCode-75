class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def helper(root, leftBound, rightBound):
            if not root:
                return True

            if root.val <= leftBound or root.val >= rightBound:
                return False
            
            return helper(root.left, leftBound, root.val) and helper(root.right, root.val, rightBound)
        
        return helper(root, float('-inf'), float('inf'))