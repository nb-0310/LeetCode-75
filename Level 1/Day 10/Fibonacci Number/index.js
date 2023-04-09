var fib = function(n) {
    if (n <= 1) return n

    let [prev, curr] = [0, 1]

    for (let i = 2; i <= n; i++) {
        const temp = curr
        curr += prev
        prev = temp
    }

    return curr
};