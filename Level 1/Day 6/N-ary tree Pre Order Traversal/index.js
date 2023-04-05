const traverse = (root, res) => {
    res.push (root.val)

    for (let i in root.children) {
        traverse (root.children[i], res)
    }
}

const preorder = function(root) {
    const res = []

    if (!root) return res

    traverse(root, res)

    return res
};