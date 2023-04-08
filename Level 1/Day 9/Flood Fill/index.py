class Solution:
    def floodFill(self, image, sr: int, sc: int, color: int):
        start = image[sr][sc]
        def helper(image, start, sr, sc, color):
            if color == start:
                return image

            if sr - 1 >= 0 and start == image[sr - 1][sc]:
                image[sr - 1][sc] = color
                helper(image, start, sr - 1, sc, color)
            if sr + 1 < len(image) and start == image[sr + 1][sc]:
                image[sr + 1][sc] = color
                helper(image, start, sr + 1, sc, color)
            if sc + 1 < len(image[sr]) and start == image[sr][sc + 1]:
                image[sr][sc + 1] = color
                helper(image, start, sr, sc + 1, color)
            if sc - 1 >= 0 and start == image[sr][sc - 1]:
                image[sr][sc - 1] = color
                helper(image, start, sr, sc - 1, color)

            image[sr][sc] = color


        helper(image, start, sr, sc, color)
        return image
       
s = Solution()
image = [[0,0,0],[0,1,0]]
print(s.floodFill(image, 1, 1, 2))