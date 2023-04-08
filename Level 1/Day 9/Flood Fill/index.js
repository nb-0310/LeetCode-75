const floodFill = function(image, sr, sc, color) {
    const start = image[sr][sc]

    const helper = (image, start, sr, sc, color) => {
        if (color === start) return image

        if (sr - 1 >= 0 && image[sr - 1][sc] === start) {
            image[sr - 1][sc] = color
            helper (image, start, sr - 1, sc, color)
        }

        if (sr + 1 < image.length && image[sr + 1][sc] === start) {
            image[sr + 1][sc] = color
            helper (image, start, sr + 1, sc, color)
        }

        if (sc - 1 >= 0 && image[sr][sc - 1] === start) {
            image[sr][sc - 1] = color
            helper (image, start, sr, sc - 1, color)
        }

        if (sr + 1 < image[sr].length && image[sr][sc + 1] === start) {
            image[sr][sc + 1] = color
            helper (image, start, sr, sc + 1, color)
        }

        image[sr][sc] = color
    }

    helper (image, start, sr, sc, color)
    return image
};