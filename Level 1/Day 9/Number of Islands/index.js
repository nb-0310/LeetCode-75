const numIslands = function(grid) {
    if (grid.length < 1) return 0

    const [rows, cols] = [grid.length, grid[0].length]
    const visited = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))
    let num_of_islands = 0

    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0' || visited[row][col]) {
            return
        }
        visited[row][col] = true
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                dfs(i, j)
                num_of_islands++
            }
        }
    }

    return num_of_islands
};
