const lowestCommonAncestor = function(root, p, q) {
    const helper = (root, p, q) => {
        if (!root) return

        if (p.val > root.val && q.val > root.val) return helper (root.right, p, q)

        if (p.val < root.val && q.val < root.val) return helper (root.left, p, q)

        return root
    }

    return helper (root, p, q)
};