var levelOrder = function(root) {
    if (!root) return []

    const res = []

    const queue = [root]

    while (queue.length > 0) {
        const sub = []
        const len = queue.length

        for (let i = 0; i < len; i++) {
            const node = queue.shift ()

            if (node) {

                if (node.left) {
                    queue.push (node.left)
                }

                if (node.right) {
                    queue.push (node.right)
                }

                sub.push (node.val)
            }
        }

        res.push (sub)
    }

    return res
};