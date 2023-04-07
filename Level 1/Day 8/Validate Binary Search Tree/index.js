var isValidBST = function(root) {
    const helper = (root, leftBound, rightBound) => {
        if (!root) return true

        if (!(root.val > leftBound) || !(root.val < rightBound)) return false

        return (helper (root.left, leftBound, root.val) && helper (root.right, root.val, rightBound))
    }

    return helper (root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};